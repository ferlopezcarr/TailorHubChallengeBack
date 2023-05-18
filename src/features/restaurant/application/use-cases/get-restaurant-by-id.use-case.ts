import { UseCase } from "@core/application/use-case";
import { EntityNotFoundException } from "../../../auth/application/exceptions/entity-not-found.exception";
import { Restaurant, RestaurantId } from "../../domain";
import { RestaurantRepositoryPort } from "../../infraestructure/driven/ports/restaurant-repository.port";
import { createRestaurantFromRepository } from "../services/restaurant-factory.service";

export class GetRestaurantByIdUseCase implements UseCase {
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
    return createRestaurantFromRepository(restaurantFromRepository);
  }
}
