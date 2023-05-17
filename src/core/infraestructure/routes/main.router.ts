import { Request, Response, Application } from "express";
import { Router } from "./router";

export class MainRouter extends Router {

    private readonly MAIN_ROUTE = "";

    constructor(
        private app: Application,
    ) {
        super();
        const route = this.getApiPath(this.MAIN_ROUTE);
        this.app.get(route, this.defaultRoute);
    }

    private defaultRoute(req: Request, res: Response) {
        res.sendStatus(200);
    }

}