import { Application } from "express";
import {
  CreateRestaurantUseCase,
  DeleteRestaurantUseCase,
  GetAllRestaurantsUseCase,
  GetRestaurantByIdUseCase,
  UpdateRestaurantUseCase,
} from "./use-cases";
import { RestaurantRepositoryPort } from "../infraestructure/driven/ports/restaurant-repository.port";
import { RestaurantApiAdapter } from "../infraestructure/drivers/adapters/restaurant-api.adapter";
import { Middleware } from "@core/infraestructure/drivers/ports/middleware";

export class RestaurantControlPlane {
  constructor(
    app: Application,
    authMiddleware: Middleware,
    restaurantRespositoryPort: RestaurantRepositoryPort
  ) {
    // App
    const getRestaurantByIdUseCase = new GetRestaurantByIdUseCase(
      restaurantRespositoryPort
    );
    const getAllRestaurantsUseCase = new GetAllRestaurantsUseCase(
      restaurantRespositoryPort
    );
    const createRestaurantUseCase = new CreateRestaurantUseCase(
      restaurantRespositoryPort
    );
    const updateRestaurantUseCase = new UpdateRestaurantUseCase(
      restaurantRespositoryPort
    );
    const deleteRestaurantUseCase = new DeleteRestaurantUseCase(
      restaurantRespositoryPort
    );

    // Drivers
    new RestaurantApiAdapter(
      app,
      authMiddleware,
      getRestaurantByIdUseCase,
      getAllRestaurantsUseCase,
      createRestaurantUseCase,
      updateRestaurantUseCase,
      deleteRestaurantUseCase
    );
  }
}
