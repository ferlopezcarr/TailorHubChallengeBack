/* import { UseCase } from "@core/application/use-case";
import { Restaurant, RestaurantId } from "../../domain";
import { RestaurantRespositoryPort } from "../../infraestructure/driven/ports/restaurant-respository.port";
import { createRestaurantFromRepository } from "../services/restaurant-factory.service";

export class GetRestaurantByIdUseCase implements UseCase {
  constructor(
    private readonly restaurantRepository: RestaurantRespositoryPort
  ) {}

  async execute(id: number): Promise<Restaurant> {
    const restaurantId = new RestaurantId(id);
    const restaurantsFromRepository = await this.restaurantRepository.getById(
      restaurantId
    );
    const restaurant = createRestaurantFromRepository(
      restaurantsFromRepository
    );
    return restaurant;
  }
}
 */