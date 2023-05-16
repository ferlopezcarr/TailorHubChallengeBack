import { Request, Response } from "express";
import {
  CreateRestaurantUseCase,
  DeleteRestaurantUseCase,
  GetAllRestaurantsUseCase,
  GetRestaurantByIdUseCase,
  UpdateRestaurantUseCase,
} from "../../../application/use-cases";
import { RestaurantApi } from "../models/restaurant-api.model";
import { RestaurantApiPort } from "../ports/restaurant-api.port";

export class RestaurantApiAdapter implements RestaurantApiPort {
  constructor(
    private readonly getRestaurantByIdUseCase: GetRestaurantByIdUseCase,
    private readonly getAllRestaurantsUseCase: GetAllRestaurantsUseCase,
    private readonly createRestaurantUseCase: CreateRestaurantUseCase,
    private readonly updateRestaurantUseCase: UpdateRestaurantUseCase,
    private readonly deleteRestaurantUseCase: DeleteRestaurantUseCase
  ) {}

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const restaurantApi: RestaurantApi = req.body as RestaurantApi;
      const restaurants = await this.getRestaurantByIdUseCase.execute(
        restaurantApi?.id
      );
      res.status(201).json(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
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
      const restaurant = await this.updateRestaurantUseCase.execute(
        restaurantApi
      );
      res.status(201).json(restaurant);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const restaurantApi: RestaurantApi = req.body as RestaurantApi;
      await this.deleteRestaurantUseCase.execute(restaurantApi?.id);
      res.status(201).json(true);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
