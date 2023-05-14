import { Application } from "express";
import { Routes } from "../../core/infraestructure/routes/routes";
import { RestaurantService } from "./application/services/restaurant.service";
import { RestaurantJsonRepositoryAdapter } from "./infraestructure/driven/adapters/restaurant-json-repository.adapter";
import { RestaurantApiAdapter } from "./infraestructure/drivers/adapters/restaurant-api.adapter";

export class RestaurantRoutes extends Routes {
  static readonly RESTAURANT_ROUTE = "restaurant";
  static readonly RESTAURANTS_ROUTE = "restaurants";

  constructor(private app: Application) {
    super(RestaurantRoutes.RESTAURANT_ROUTE);
    const restaurantRepository = new RestaurantJsonRepositoryAdapter();
    const restaurantService = new RestaurantService(restaurantRepository);
    const restaurantApiAdapter = new RestaurantApiAdapter(restaurantService);

    const restaurantsFullRoute = this.getApiPath(
      RestaurantRoutes.RESTAURANTS_ROUTE
    );

    this.app.get(this.route, restaurantApiAdapter.getById);
    this.app.get(restaurantsFullRoute, restaurantApiAdapter.getAll);
    this.app.post(this.route, restaurantApiAdapter.create);
    this.app.put(this.route, restaurantApiAdapter.update);
    this.app.delete(this.route, restaurantApiAdapter.delete);
  }
}
