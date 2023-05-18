import { RestaurantId } from "../../../../restaurant/domain";
import { User, UserId, Username } from "../../../domain";
import { UnregisteredUser } from "../../../domain/unregistered-user.model";
import { UserRepository } from "../models/user-repository.model";

export interface UserRepositoryPort {
  create(unregisteredUser: UnregisteredUser): Promise<UserRepository>;
  getById(userId: UserId): Promise<UserRepository>;
  getByUsername(username: Username): Promise<UserRepository>;
  markRestaurantAsFavourite(
    userId: UserId,
    restaurantId: RestaurantId,
    favouriteState: boolean
  ): Promise<UserRepository>;
}
