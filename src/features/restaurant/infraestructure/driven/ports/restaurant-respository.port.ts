import { CrudRepostory } from "../../../../../core/infraestructure/crud.repository";
import { Restaurant } from "../../../domain/models/restaurant";
import { RestaurantId } from "../../../domain/models/restaurant-id";

import { RestaurantRepository } from "../models/restaurant-repository";

export interface RestaurantRespositoryPort
  extends CrudRepostory<Restaurant, RestaurantRepository> {
  create(restaurant: Restaurant): Promise<RestaurantRepository>;
  getById(restaurantId: RestaurantId): Promise<RestaurantRepository>;
  getAll(): Promise<RestaurantRepository[]>;
  update(restaurant: Restaurant): Promise<RestaurantRepository>;
  delete(restaurant: Restaurant): Promise<RestaurantRepository>;
  markAsFavorite(restaurant: Restaurant): Promise<RestaurantRepository>;
}
