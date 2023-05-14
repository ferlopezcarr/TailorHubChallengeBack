import { FieldNotProvidedException } from "../../../../../core/domain/exceptions/field-not-provided.exception";
import { Restaurant } from "../../../domain/models/restaurant";
import { RestaurantId } from "../../../domain/models/restaurant-id";

import { RestaurantRepository } from "../models/restaurant";
import { RestaurantRespositoryPort } from "../ports/restaurant-respository.port";

export class RestaurantJsonRepositoryAdapter
  implements RestaurantRespositoryPort
{
  create(restaurant: Restaurant): Promise<RestaurantRepository> {
    if (!restaurant) {
      throw new FieldNotProvidedException();
    }
    return Promise.resolve({} as unknown as RestaurantRepository);
  }
  getById(restaurantId: RestaurantId): Promise<RestaurantRepository> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<RestaurantRepository[]> {
    throw new Error("Method not implemented.");
  }
  update(restaurant: Restaurant): Promise<RestaurantRepository> {
    throw new Error("Method not implemented.");
  }
  delete(restaurant: Restaurant): Promise<RestaurantRepository> {
    throw new Error("Method not implemented.");
  }
  markAsFavorite(restaurant: Restaurant): Promise<RestaurantRepository> {
    throw new Error("Method not implemented.");
  }
}
