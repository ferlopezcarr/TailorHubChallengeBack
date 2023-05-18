import { notUndefinedOrNull } from "@core/domain/services";
import {
  createRestaurantFromApi,
  createRestaurantFromRepository,
} from "../../../restaurant/application/services/restaurant-factory.service";
import { User, UserId, Username } from "../../domain";
import { UserRepository } from "../../infraestructure/driven/models/user-repository.model";
import { UserApi } from "../../infraestructure/drivers/models/user-api.model";
import { RestaurantRepository } from "../../../restaurant/infraestructure/driven/models/restaurant-repository";

export const createUserFromApi = (userApi: UserApi): User => {
  notUndefinedOrNull(userApi);
  const id = new UserId(userApi.id);
  const username = new Username(userApi.username);
  notUndefinedOrNull(userApi.favouriteRestaurants);
  const favouriteRestaurants = userApi.favouriteRestaurants.map(
    (favouriteRestaurantApi) => createRestaurantFromApi(favouriteRestaurantApi)
  );
  return new User(id, username, favouriteRestaurants);
};

export const createUserWithRestaurantsFromRepository = (
  userRepository: UserRepository,
  restaurantsFromRepository: RestaurantRepository[]
): User => {
  notUndefinedOrNull(userRepository);
  const id = new UserId(userRepository.id);
  const username = new Username(userRepository.username);
  notUndefinedOrNull(userRepository.favouriteRestaurantIds);
  const favouriteRestaurants = restaurantsFromRepository.map(
    (favouriteRestaurantFromRepository) =>
      createRestaurantFromRepository(favouriteRestaurantFromRepository)
  );
  return new User(id, username, favouriteRestaurants);
};
