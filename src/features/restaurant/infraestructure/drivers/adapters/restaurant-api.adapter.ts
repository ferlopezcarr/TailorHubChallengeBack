import { Request, Response } from "express";
import { RestaurantService } from "../../../application/services/restaurant.service";
import { RestaurantApi } from "../models/restaurant-api.model";
import { RestaurantApiPort } from "../ports/restaurant-api.port";
import { CreateRestaurantUseCase } from "../../../application/use-cases/create-restaurant.use-case";

export class RestaurantApiAdapter implements RestaurantApiPort {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly createRestaurantUseCase: CreateRestaurantUseCase
  ) {}
  getById(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getAll(res: Response): Promise<void> {
    try {
      const restaurants = await this.restaurantService.getAll();
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
