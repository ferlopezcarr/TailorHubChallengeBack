import { Request, Response } from "express";
import {
  CreateRestaurantUseCase,
  GetAllRestaurantsUseCase,
} from "../../../application/use-cases";
import { RestaurantApi } from "../models/restaurant-api.model";
import { RestaurantApiPort } from "../ports/restaurant-api.port";

export class RestaurantApiAdapter implements RestaurantApiPort {
  constructor(
    private readonly getAllRestaurantsUseCase: GetAllRestaurantsUseCase,
    private readonly createRestaurantUseCase: CreateRestaurantUseCase
  ) {}

  async getById(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getAll(res: Response): Promise<void> {
    try {
      const restaurants = await this.getAllRestaurantsUseCase.execute();
      res.status(201).json(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const restaurantApi: RestaurantApi = req.body as RestaurantApi;
      const restaurant = await this.createRestaurantUseCase.execute(
        restaurantApi
      );
      res.status(201).json(restaurant);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const restaurantApi: RestaurantApi = req.body as RestaurantApi;
      const restaurant = await this.restaurantService.update(restaurantApi);
      res.status(201).json(restaurant);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const restaurantApi: RestaurantApi = req.body as RestaurantApi;
      await this.restaurantService.delete(restaurantApi?.id);
      res.status(201).json(true);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
