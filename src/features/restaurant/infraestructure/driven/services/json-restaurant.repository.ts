import { FieldNotProvided } from "../../../core/infraestructure/exceptions/field-not-provided-exception";
import { Restaurant } from "../domain/restaurant";
import { RestaurantId } from "../domain/restaurant-id";
import { RestaurantRepository } from "./restaurant.repository";

export class JsonRestaurantRepository implements RestaurantRepository {
  create(restaurant: Restaurant): Promise<Restaurant> {
    if (!restaurant) {
      throw new FieldNotProvided();
    }
    

  }
  getById(restaurantId: RestaurantId): Promise<Restaurant> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Restaurant[]> {
    throw new Error("Method not implemented.");
  }
  update(restaurant: Restaurant): Promise<Restaurant> {
    throw new Error("Method not implemented.");
  }
  delete(restaurant: Restaurant): Promise<Restaurant> {
    throw new Error("Method not implemented.");
  }
  markAsFavorite(restaurant: Restaurant): Promise<Restaurant> {
    throw new Error("Method not implemented.");
  }

}