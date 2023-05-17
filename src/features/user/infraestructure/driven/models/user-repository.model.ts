import { RestaurantRepository } from "../../../../restaurant/infraestructure/driven/models/restaurant-repository";

export interface UserRepository {
  id: number;
  username: string;
  favouriteRestaurants: RestaurantRepository[];
}
