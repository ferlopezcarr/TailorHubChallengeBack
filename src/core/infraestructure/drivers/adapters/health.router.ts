import { Application, Request, Response } from "express";
import { Router } from "../models/router";

export class HealthApiAdapter extends Router {
  private readonly HEALTH_ROUTE = "health";

  constructor(app: Application) {
    super();
    const route = this.getApiPath(this.HEALTH_ROUTE);
    app.get(route, this.defaultRoute);
  }

  private defaultRoute(req: Request, res: Response) {
    res.status(200).send({ message: "OK" });
  }
}
