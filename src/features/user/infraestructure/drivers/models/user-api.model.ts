import { RestaurantApi } from "../../../../restaurant/infraestructure/drivers/models/restaurant-api.model";

export interface UserApi {
  id: number;
  username: string;
  favouriteRestaurants: RestaurantApi[];
}
