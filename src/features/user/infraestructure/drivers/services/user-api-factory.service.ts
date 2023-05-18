import { notUndefinedOrNull } from "@core/domain/services";
import { createRestaurantApiFromRestaurant } from "../../../../restaurant/infraestructure/drivers/services/restaurant-api-factory.service";
import { User } from "../../../domain";
import { UserApi } from "../models/user-api.model";

export const createUserApiFromUser = (
  user: User
): UserApi => {
  notUndefinedOrNull(user);
  return {
    id: user.getId().getId(),
    username: user.getUsername().getUsername(),
    favouriteRestaurants: user
      .getFavouriteRestaurants()
      .map((restaurant) => createRestaurantApiFromRestaurant(restaurant)),
  };
};