import { CrudRepostory } from "../../../../../core/infraestructure/driven/crud.repository";
import { Restaurant } from "../../../domain/models/restaurant.model";
import { RestaurantId } from "../../../domain/models/restaurant-id.model";

import { RestaurantRepository } from "../models/restaurant-repository";

export interface RestaurantRepositoryPort
  extends CrudRepostory<Restaurant, RestaurantRepository> {
  create(restaurant: Restaurant): Promise<RestaurantRepository>;
  getById(restaurantId: RestaurantId): Promise<RestaurantRepository>;
  getAll(): Promise<RestaurantRepository[]>;
  update(restaurant: Restaurant): Promise<RestaurantRepository>;
  delete(restaurant: Restaurant): Promise<RestaurantRepository>;
}
