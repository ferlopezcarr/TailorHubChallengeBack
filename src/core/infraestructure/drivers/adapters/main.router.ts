import { Request, Response, Application } from "express";
import { Router } from "../models/router";

export class MainApiAdapter extends Router {
  private readonly MAIN_ROUTE = "";

  constructor(app: Application) {
    super();
    const route = this.getApiPath(this.MAIN_ROUTE);
    app.get(route, this.defaultRoute);
  }

  private defaultRoute(req: Request, res: Response) {
    res.sendStatus(200);
  }
}
