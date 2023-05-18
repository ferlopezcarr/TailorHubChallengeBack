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
import { Router } from "@core/infraestructure/drivers/models/router";
import {
  isIntegerNumber,
  isNaturalNumber,
  isNumber,
  notEmptyString,
  notUndefinedOrNull,
} from "@core/domain/services";
import { createRestaurantApiFromRestaurant } from "../services/restaurant-api-factory.service";
import { Middleware } from "@core/infraestructure/drivers/ports/middleware";

export class RestaurantApiAdapter extends Router implements RestaurantApiPort {
  private readonly RESTAURANT_ROUTE = "restaurant";
  private readonly RESTAURANTS_ROUTE = "restaurants";

  constructor(
    app: Application,
    authMiddleware: Middleware,
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

    app.get(`${restaurantRoute}/:id`, this.getById.bind(this));
    app.get(restaurantsFullRoute, this.getAll.bind(this));
    app.post(
      restaurantRoute,
      authMiddleware.intercept.bind(authMiddleware),
      this.create.bind(this)
    );
    app.put(
      restaurantRoute,
      authMiddleware.intercept.bind(authMiddleware),
      this.update.bind(this)
    );
    app.delete(
      restaurantRoute,
      authMiddleware.intercept.bind(authMiddleware),
      this.delete.bind(this)
    );
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const restaurantId = isNumber(
        notEmptyString(notUndefinedOrNull(req.body?.id))
      );
      const restaurant = await this.getRestaurantByIdUseCase.execute(
        restaurantId
      );
      const restaurantApi = createRestaurantApiFromRestaurant(restaurant);
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
        createRestaurantApiFromRestaurant(restaurant)
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
      console.error(error);
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
      const restaurantId = isNumber(
        notEmptyString(notUndefinedOrNull(req.body?.id))
      );
      const restaurant = await this.deleteRestaurantUseCase.execute(
        restaurantId
      );
      const deletedRestaurantApi =
        createRestaurantApiFromRestaurant(restaurant);
      res.status(200).json(deletedRestaurantApi);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
