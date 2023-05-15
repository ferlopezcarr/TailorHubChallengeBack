import { Application } from "express";
import { Routes } from "../../core/infraestructure/routes/routes";
import {
  CreateRestaurantUseCase,
  GetAllRestaurantsUseCase,
} from "./application/use-cases";
import { RestaurantJsonRepositoryAdapter } from "./infraestructure/driven/adapters/restaurant-json-repository.adapter";
import { RestaurantApiAdapter } from "./infraestructure/drivers/adapters/restaurant-api.adapter";

export class RestaurantRoutes extends Routes {
  static readonly RESTAURANT_ROUTE = "restaurant";
  static readonly RESTAURANTS_ROUTE = "restaurants";

  constructor(private app: Application) {
    super(RestaurantRoutes.RESTAURANT_ROUTE);

    // Driven
    const restaurantJsonRepository = new RestaurantJsonRepositoryAdapter();
    // App
    const createRestaurantUseCase = new CreateRestaurantUseCase(
      restaurantJsonRepository
    );
    const getAllRestaurantsUseCase = new GetAllRestaurantsUseCase(
      restaurantJsonRepository
    );
    // Drivers
    const restaurantApi = new RestaurantApiAdapter(
      getAllRestaurantsUseCase,
      createRestaurantUseCase
    );

    // Routes
    const restaurantsFullRoute = this.getApiPath(
      RestaurantRoutes.RESTAURANTS_ROUTE
    );

    this.app.get(this.route, restaurantApi.getById);
    this.app.get(restaurantsFullRoute, restaurantApi.getAll);
    this.app.post(this.route, restaurantApi.create);
    this.app.put(this.route, restaurantApi.update);
    this.app.delete(this.route, restaurantApi.delete);
  }
}
