import { Request, Response, NextFunction } from "express";

export interface Middleware {
  intercept(request: Request, response: Response, next: NextFunction): void;
}
