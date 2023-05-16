import { UseCase } from "@core/application/use-case";
import { notUndefinedOrNull } from "@core/domain/services";
import { Restaurant } from "../../domain";
import { RestaurantRespositoryPort } from "../../infraestructure/driven/ports/restaurant-respository.port";
import { createRestaurantFromRepository } from "../services/restaurant-factory.service";

export class GetAllRestaurantsUseCase implements UseCase {
  constructor(
    private readonly restaurantRepository: RestaurantRespositoryPort
  ) {}

  async execute(): Promise<Restaurant[]> {
    const restaurantsFromRepository = await this.restaurantRepository.getAll();
    notUndefinedOrNull(restaurantsFromRepository);
    return restaurantsFromRepository.map((restaurantRepository) =>
      createRestaurantFromRepository(restaurantRepository)
    );
  }
}
