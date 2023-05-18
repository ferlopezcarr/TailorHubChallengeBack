import { notUndefinedOrNull } from "@core/domain/services";
import { User } from "../../../domain";
import { UserRepository } from "../models/user-repository.model";

export const createUserRepositoryFromUser = (user: User): UserRepository => {
  notUndefinedOrNull(User);
  return {
    id: user.getId().getId(),
    username: user.getUsername().getUsername(),
    favouriteRestaurantIds: user
      .getFavouriteRestaurants()
      .map((restaurant) => restaurant.getId().getId()),
  };
};
