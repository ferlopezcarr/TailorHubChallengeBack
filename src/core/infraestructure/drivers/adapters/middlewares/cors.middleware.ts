import { Application, NextFunction, Request, Response } from "express";
import { Middleware } from "../../ports/middleware";

export class CorsMiddleware implements Middleware {
  constructor(app: Application) {
    app.use(this.intercept.bind(this));
  }

  public intercept(request: Request, response: Response, next: NextFunction) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }
}
