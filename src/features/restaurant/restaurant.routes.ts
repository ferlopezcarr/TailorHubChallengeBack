import { Application } from "express";
import { Router } from "../../core/infraestructure/routes/router";
import {
  CreateRestaurantUseCase,
  DeleteRestaurantUseCase,
  GetAllRestaurantsUseCase,
  GetRestaurantByIdUseCase,
  UpdateRestaurantUseCase,
} from "./application/use-cases";
import { RestaurantJsonRepositoryAdapter } from "./infraestructure/driven/adapters/restaurant-json-repository.adapter";
import { RestaurantApiAdapter } from "./infraestructure/drivers/adapters/restaurant-api.adapter";

export class RestaurantControlPlane {

  constructor(private app: Application) {
    // Driven
    const restaurantJsonRepository = new RestaurantJsonRepositoryAdapter();
    // App
    const getRestaurantByIdUseCase = new GetRestaurantByIdUseCase(
      restaurantJsonRepository
    );
    const getAllRestaurantsUseCase = new GetAllRestaurantsUseCase(
      restaurantJsonRepository
    );
    const createRestaurantUseCase = new CreateRestaurantUseCase(
      restaurantJsonRepository
    );
    const updateRestaurantUseCase = new UpdateRestaurantUseCase(
      restaurantJsonRepository
    );
    const deleteRestaurantUseCase = new DeleteRestaurantUseCase(
      restaurantJsonRepository
    );

    // Drivers
    const restaurantApi = new RestaurantApiAdapter(
      app,
      getRestaurantByIdUseCase,
      getAllRestaurantsUseCase,
      createRestaurantUseCase,
      updateRestaurantUseCase,
      deleteRestaurantUseCase
    );
  }
}
