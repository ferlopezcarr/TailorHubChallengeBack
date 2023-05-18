import { Application, NextFunction, Request, Response } from "express";
import { Middleware } from "../../ports/middleware";

export class LoggerMiddleware implements Middleware {
  constructor(app: Application) {
    app.use(this.intercept.bind(this));
  }

  public intercept(request: Request, response: Response, next: NextFunction) {
    console.log(
      `[${new Date().toISOString()}] ${request.method} ${request.path}`
    );
    next();
  }
}
