import express from "express";
import { HealthRoutes } from "./core/infraestructure/routes/health.routes";
import { MainRoutes } from "./core/infraestructure/routes/main.routes";
import { Routes } from "./core/infraestructure/routes/routes";
import { RestaurantRoutes } from "./features/restaurant/restaurant.routes";
import { UserRoutes } from "./features/user/routes/user.routes";

export class App {
  public expressApp: express.Application;
  public port: number;

  private routes: Routes[];

  constructor(port: number, middlewares?: any[]) {
    this.expressApp = express(); //run the express instance and store in app
    this.port = port;
    this.middlewares(middlewares);

    this.routes = [
      new MainRoutes(this.expressApp),
      new HealthRoutes(this.expressApp),
      new UserRoutes(this.expressApp),
      new RestaurantRoutes(this.expressApp),
    ];
  }

  private middlewares(middlewares?: any[]) {
    middlewares?.forEach((middleware) => {
      this.expressApp.use(middleware);
    });
  }

  public listen() {
    this.expressApp.listen(this.port, () => {
      console.log("--------------------------------------------------");
      console.log(`Server listening on: http://localhost:${this.port}`);
      console.log("--------------------------------------------------");
    });
  }
}
