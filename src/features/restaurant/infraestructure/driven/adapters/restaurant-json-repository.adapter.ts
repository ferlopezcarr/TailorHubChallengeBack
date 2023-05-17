import { Restaurant } from "../../../domain/models/restaurant";
import { RestaurantId } from "../../../domain/models/restaurant-id";
import { RestaurantRepository } from "../models/restaurant-repository";
import { RestaurantRespositoryPort } from "../ports/restaurant-respository.port";

import { isIntegerNumber, notUndefinedOrNull } from "@core/domain/services";
import restaurantJsonData from "../../../../../../data/restaurants.json";
import { EntityNotFoundException } from "@core/infraestructure/exceptions/entity-not-found.exception";

export class RestaurantJsonRepositoryAdapter
  implements RestaurantRespositoryPort
{
  private readonly restaurantData: RestaurantRepository[];

  constructor() {
    this.restaurantData = restaurantJsonData ?? [];
  }

  public create(restaurant: Restaurant): Promise<RestaurantRepository> {
    notUndefinedOrNull(restaurant);
    return Promise.resolve({} as unknown as RestaurantRepository);
  }

  public getById(restaurantId: RestaurantId): Promise<RestaurantRepository> {
    notUndefinedOrNull(restaurantId);
    const restaurant = this.restaurantData.find(
      (restaurant) => restaurant.id === restaurantId.getId()
    );
    if (!restaurant) {
      throw new EntityNotFoundException();
    }
    return Promise.resolve(restaurant);
  }

  public getAll(): Promise<RestaurantRepository[]> {
    return Promise.resolve(this.restaurantData);
  }

  public update(restaurant: Restaurant): Promise<RestaurantRepository> {
    notUndefinedOrNull(restaurant);
    const restaurantId = notUndefinedOrNull(restaurant.getId());
    const restaurantRepositoryIndex = this.restaurantData.findIndex(
      (restaurant) => restaurant.id === restaurantId.getId()
    );
    isIntegerNumber(restaurantRepositoryIndex);
    const restaurantRepositoryFound =
      restaurantRepositoryIndex < 0
        ? this.restaurantData[restaurantRepositoryIndex]
        : null;
    if (!restaurantRepositoryFound) {
      throw new EntityNotFoundException();
    }
    //this.restaurantData[restaurantRepositoryIndex] = createRestaurantRepositoryFromDomain(restaurant);
    return Promise.resolve(this.restaurantData[restaurantRepositoryIndex]);
  }

  public delete(restaurant: Restaurant): Promise<RestaurantRepository> {
    notUndefinedOrNull(restaurant);
    const restaurantId = notUndefinedOrNull(restaurant.getId());
    const restaurantRepositoryIndex = this.restaurantData.findIndex(
      (restaurant) => restaurant.id === restaurantId.getId()
    );
    isIntegerNumber(restaurantRepositoryIndex);
    const restaurantRepositoryFound =
      restaurantRepositoryIndex >= 0
        ? this.restaurantData[restaurantRepositoryIndex]
        : null;
    if (!restaurantRepositoryFound) {
      throw new EntityNotFoundException();
    }
    this.restaurantData.splice(restaurantRepositoryIndex, 1);
    return Promise.resolve(restaurantRepositoryFound);
  }

  public markAsFavorite(restaurant: Restaurant): Promise<RestaurantRepository> {
    throw new Error("Method not implemented.");
  }
}
