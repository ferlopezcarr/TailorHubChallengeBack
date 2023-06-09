import { Request, Response } from "express";

export interface AuthApiPort {
  login(req: Request, res: Response): Promise<void>;
}