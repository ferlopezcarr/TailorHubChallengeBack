import express from "express";
import { HealthRouter } from "./core/infraestructure/routes/health.router";
import { MainRouter } from "./core/infraestructure/routes/main.router";
import { RestaurantControlPlane } from "./features/restaurant/restaurant.routes";

export class App {
  public expressApp: express.Application;
  public port: number;

  constructor(port: number, middlewares?: any[]) {
    this.expressApp = express(); //run the express instance and store in app
    this.port = port;
    this.middlewares(middlewares);

    new MainRouter(this.expressApp);
    new HealthRouter(this.expressApp);
    new RestaurantControlPlane(this.expressApp);
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
