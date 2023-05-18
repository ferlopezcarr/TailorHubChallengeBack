import {
  HealthApiAdapter,
  MainApiAdapter,
} from "@core/infraestructure/drivers/adapters";
import {
  CorsMiddleware,
  LoggerMiddleware,
} from "@core/infraestructure/drivers/adapters/middlewares";
import express from "express";
import { BodyParserMiddleware } from "./core/infraestructure/drivers/adapters/middlewares/body-parser.middleware";
import { AuthControlPlane } from "./features/auth/application/auth.control-plane";
import { TokenControlPlane } from "./features/auth/application/token.control-plane";
import { AuthInMemoryRepositoryAdapter } from "./features/auth/infraestructure/driven/adapters/auth-repository.adapter";
import { RestaurantControlPlane } from "./features/restaurant/application/restaurant.control-plane";
import { RestaurantJsonRepositoryAdapter } from "./features/restaurant/infraestructure/driven/adapters/restaurant-json-repository.adapter";
import { UserControlPlane } from "./features/user/application/user.control-plane";
import { UserInMemoryRepositoryAdapter } from "./features/user/infraestructure/driven/adapters/user-in-memory-repository.adapter";

export class App {
  public expressApp: express.Application;
  public port: number;

  constructor(port: number) {
    this.expressApp = express(); //run the express instance and store in app
    this.port = port;

    // Moddlewares
    new BodyParserMiddleware(this.expressApp);
    new LoggerMiddleware(this.expressApp);
    new CorsMiddleware(this.expressApp);

    // Core Adapters
    new MainApiAdapter(this.expressApp);
    new HealthApiAdapter(this.expressApp);

    // Feature Adapters
    const authInMemoryRepositoryAdapter = new AuthInMemoryRepositoryAdapter();
    const tokenControlPlane = new TokenControlPlane(
      authInMemoryRepositoryAdapter
    );
    const authMiddleware = tokenControlPlane.getAuthMiddleware();

    const restaurantRespositoryAdapter = new RestaurantJsonRepositoryAdapter();
    new RestaurantControlPlane(
      this.expressApp,
      authMiddleware,
      restaurantRespositoryAdapter
    );

    const userInMemoryRepositoryAdapter = new UserInMemoryRepositoryAdapter();
    new UserControlPlane(
      this.expressApp,
      authMiddleware,
      authInMemoryRepositoryAdapter,
      userInMemoryRepositoryAdapter,
      restaurantRespositoryAdapter
    );

    new AuthControlPlane(
      this.expressApp,
      authInMemoryRepositoryAdapter,
      userInMemoryRepositoryAdapter
    );
  }

  public listen() {
    this.expressApp.listen(this.port, () => {
      console.log("--------------------------------------------------");
      console.log(`Server listening on: http://localhost:${this.port}`);
      console.log("--------------------------------------------------");
    });
  }
}
