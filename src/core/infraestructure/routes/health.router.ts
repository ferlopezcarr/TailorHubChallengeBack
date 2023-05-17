import { Application, Request, Response } from "express";
import { Router } from "./router";

export class HealthRouter extends Router {
  private readonly HEALTH_ROUTE = "health";

  constructor(private app: Application) {
    super();
    const route = this.getApiPath(this.HEALTH_ROUTE);
    this.app.get(route, this.defaultRoute);
  }

  private defaultRoute(req: Request, res: Response) {
    res.status(200).send({ message: "OK" });
  }
}
