import { EntityNotFoundException } from "@core/application/exceptions/entity-not-found.exception";
import { notUndefinedOrNull } from "@core/domain/services";
import { RestaurantId } from "../../../../restaurant/domain";
import { User, UserId, Username } from "../../../domain";
import { UnregisteredUser } from "../../../domain/unregistered-user.model";
import { UserAlreadyExistsException } from "../exceptions/user-already-exists.exception";
import { UserRepository } from "../models/user-repository.model";
import { UserRepositoryPort } from "../ports/user-repository.port";
import { createUserRepositoryFromUser } from "../services/user-repository-factory.service";

export class UserInMemoryRepositoryAdapter implements UserRepositoryPort {
  private users: UserRepository[] = [];

  create(unregisteredUser: UnregisteredUser): Promise<UserRepository> {
    notUndefinedOrNull(unregisteredUser);
    const username: Username = unregisteredUser.getUsername();
    const userFromRepository = this.users?.find(
      (userTemp) => userTemp.username === username.getUsername()
    );
    if (!!userFromRepository) {
      throw new UserAlreadyExistsException();
    }
    const userId = this.generateNewId();
    const userToCreate = new User(userId, username, []);
    const userRepository = createUserRepositoryFromUser(userToCreate);
    this.users.push(userRepository);
    return Promise.resolve(userRepository);
  }

  private generateNewId(): UserId {
    notUndefinedOrNull(this.users);
    let userId = 1;
    if (this.users.length > 0) {
      userId = this.users[this.users.length - 1].id + 1;
    }
    return new UserId(userId);
  }

  getById(userId: UserId): Promise<UserRepository> {
    notUndefinedOrNull(userId);
    const userFromRepository = this.users?.find(
      (userTemp) => userTemp.id === userId.getId()
    );
    if (!userFromRepository) {
      throw new EntityNotFoundException();
    }
    return Promise.resolve(userFromRepository);
  }

  getByUsername(username: Username): Promise<UserRepository> {
    notUndefinedOrNull(username);
    const userFromRepository = this.users?.find(
      (userTemp) => userTemp.username === username.getUsername()
    );
    if (!userFromRepository) {
      throw new EntityNotFoundException();
    }
    return Promise.resolve(userFromRepository);
  }

  markRestaurantAsFavourite(
    userId: UserId,
    restaurantId: RestaurantId,
    favouriteState: boolean
  ): Promise<UserRepository> {
    const userIndex = this.users?.findIndex(
      (userTemp) => userTemp.id === userId.getId()
    );
    if (userIndex < 0) {
      throw new EntityNotFoundException();
    }
    const userFromRepository = this.users[userIndex];
    const favouriteRestaurantIdIndex =
      userFromRepository.favouriteRestaurantIds.findIndex(
        (restaurantTempId) => restaurantTempId === restaurantId.getId()
      );
    const wasAlreadyFavourite = favouriteRestaurantIdIndex >= 0;
    if (favouriteState && !wasAlreadyFavourite) {
      userFromRepository.favouriteRestaurantIds.push(restaurantId.getId());
    } else if (!favouriteState && wasAlreadyFavourite) {
      userFromRepository.favouriteRestaurantIds.splice(
        favouriteRestaurantIdIndex,
        1
      );
    }
    return Promise.resolve(userFromRepository);
  }
}
