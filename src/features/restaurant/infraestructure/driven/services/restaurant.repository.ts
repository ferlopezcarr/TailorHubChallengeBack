import { CrudRepostory } from "../../../core/infraestructure/crud.repository";
import { Restaurant } from "../domain/restaurant";
import { RestaurantId } from "../domain/restaurant-id";

export interface RestaurantRepository extends CrudRepostory<Restaurant> {
  create(restaurant: Restaurant): Promise<Restaurant>;
  getById(restaurantId: RestaurantId): Promise<Restaurant>;
  getAll(): Promise<Restaurant[]>;
  update(restaurant: Restaurant): Promise<Restaurant>;
  delete(restaurant: Restaurant): Promise<Restaurant>;
  markAsFavorite(restaurant: Restaurant): Promise<Restaurant>;
}