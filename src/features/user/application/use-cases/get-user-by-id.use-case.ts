import { UseCase } from "@core/application/use-case";
import { EntityNotFoundException } from "../../../auth/application/exceptions/entity-not-found.exception";
import { RestaurantRepositoryPort } from "../../../restaurant/infraestructure/driven/ports/restaurant-repository.port";
import { User, UserId } from "../../domain";
import { UserRepositoryPort } from "../../infraestructure/driven/ports/user-repository.port";
import { createUserWithRestaurantsFromRepository } from "../services/user-factory.service";
import { RestaurantId } from "../../../restaurant/domain";

export class GetUserByIdUseCase implements UseCase {
  constructor(
    private readonly userRepository: UserRepositoryPort,
    private readonly restaurantRespository: RestaurantRepositoryPort
  ) {}

  async execute(id: number): Promise<User> {
    const userId = new UserId(id);
    const userFromRepository = await this.userRepository.getById(userId);
    if (!userFromRepository) {
      throw new EntityNotFoundException();
    }
    const restaurants = await Promise.all(
      userFromRepository.favouriteRestaurantIds.map(
        async (restaurantTempId) => {
          const restaurantId = new RestaurantId(restaurantTempId);
          return await this.restaurantRespository.getById(restaurantId);
        }
      )
    );
    return createUserWithRestaurantsFromRepository(
      userFromRepository,
      restaurants
    );
  }
}
