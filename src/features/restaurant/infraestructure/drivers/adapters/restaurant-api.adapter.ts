import { Application, Request, Response } from "express";
import {
  CreateRestaurantUseCase,
  DeleteRestaurantUseCase,
  GetAllRestaurantsUseCase,
  GetRestaurantByIdUseCase,
  UpdateRestaurantUseCase,
} from "../../../application/use-cases";
import { RestaurantApi } from "../models/restaurant-api.model";
import { RestaurantApiPort } from "../ports/restaurant-api.port";
import { Router } from "@core/infraestructure/routes/router";
import {
  isIntegerNumber,
  isNaturalNumber,
  isNumber,
  notUndefinedOrNull,
} from "@core/domain/services";
import { createRestaurantApiFromDomain } from "../services/restaurant-api-factory.service";

export class RestaurantApiAdapter extends Router implements RestaurantApiPort {
  private readonly RESTAURANT_ROUTE = "restaurant";
  private readonly RESTAURANTS_ROUTE = "restaurants";

  constructor(
    private app: Application,
    private readonly getRestaurantByIdUseCase: GetRestaurantByIdUseCase,
    private readonly getAllRestaurantsUseCase: GetAllRestaurantsUseCase,
    private readonly createRestaurantUseCase: CreateRestaurantUseCase,
    private readonly updateRestaurantUseCase: UpdateRestaurantUseCase,
    private readonly deleteRestaurantUseCase: DeleteRestaurantUseCase
  ) {
    super();

    // Routes
    const restaurantRoute = this.getApiPath(this.RESTAURANT_ROUTE);
    const restaurantsFullRoute = this.getApiPath(this.RESTAURANTS_ROUTE);

    this.app.get(`${restaurantRoute}/:id`, this.getById.bind(this));
    this.app.get(restaurantsFullRoute, this.getAll.bind(this));
    this.app.post(restaurantRoute, this.create.bind(this));
    this.app.put(restaurantRoute, this.update.bind(this));
    this.app.delete(restaurantRoute, this.delete.bind(this));
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = isNumber(req.params?.id);
      const restaurantId: number = isNaturalNumber(id);
      const restaurant = await this.getRestaurantByIdUseCase.execute(
        restaurantId
      );
      const restaurantApi = createRestaurantApiFromDomain(restaurant);
      res.status(200).json(restaurantApi);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const restaurants = await this.getAllRestaurantsUseCase.execute();
      notUndefinedOrNull(restaurants);
      const restaurantsApi = restaurants.map((restaurant) =>
        createRestaurantApiFromDomain(restaurant)
      );
      res.status(200).json(restaurantsApi);
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
      res.status(200).json(restaurant);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const restaurantApi: RestaurantApi = req.body as RestaurantApi;
      const restaurant = await this.deleteRestaurantUseCase.execute(restaurantApi?.id);
      const deletedRestaurantApi = createRestaurantApiFromDomain(restaurant);
      res.status(200).json(deletedRestaurantApi);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
