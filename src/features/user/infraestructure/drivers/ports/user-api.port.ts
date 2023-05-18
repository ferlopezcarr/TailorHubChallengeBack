import { Request, Response } from "express";

export interface UserApiPort {
  getById(req: Request, res: Response): Promise<void>;
  create(req: Request, res: Response): Promise<void>;
  markRestaurantAsFavourite(req: Request, res: Response): Promise<void>;
}
