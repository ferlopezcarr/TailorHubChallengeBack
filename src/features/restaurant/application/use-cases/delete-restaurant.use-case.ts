import { UseCase } from "@core/application/use-case";
import { notUndefinedOrNull } from "@core/domain/services";
import { Restaurant, RestaurantId } from "../../domain";
import { RestaurantRepositoryPort } from "../../infraestructure/driven/ports/restaurant-repository.port";
import { createRestaurantFromRepository } from "../services/restaurant-factory.service";
import { EntityNotFoundException } from "@core/application/exceptions/entity-not-found.exception";

export class DeleteRestaurantUseCase implements UseCase {
  constructor(
    private readonly restaurantRepository: RestaurantRepositoryPort
  ) {}

  async execute(id: number): Promise<Restaurant> {
    const restaurantId = new RestaurantId(id);
    const restaurantFromRepository = await this.restaurantRepository.getById(
      restaurantId
    );
    if (!restaurantFromRepository) {
      throw new EntityNotFoundException();
    }
    const restaurant = createRestaurantFromRepository(restaurantFromRepository);
    const deletedRestaurantRepository = await this.restaurantRepository.delete(
      restaurant
    );
    return createRestaurantFromRepository(deletedRestaurantRepository);
  }
}
