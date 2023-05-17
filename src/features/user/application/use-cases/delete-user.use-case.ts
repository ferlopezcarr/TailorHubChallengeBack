/* import { UseCase } from "@core/application/use-case";
import { notUndefinedOrNull } from "@core/domain/services";
import { Restaurant, RestaurantId } from "../../domain";
import { RestaurantRespositoryPort } from "../../infraestructure/driven/ports/restaurant-respository.port";
import { createRestaurantFromRepository } from "../services/restaurant-factory.service";

export class DeleteRestaurantUseCase implements UseCase {
  constructor(
    private readonly restaurantRepository: RestaurantRespositoryPort
  ) {}

  async execute(id: number): Promise<Restaurant> {
    const restaurantId = new RestaurantId(id);
    const restaurantFromRepository = await this.restaurantRepository.getById(
      restaurantId
    );
    notUndefinedOrNull(restaurantFromRepository);
    const restaurant = createRestaurantFromRepository(restaurantFromRepository);
    const deletedRestaurantRepository = await this.restaurantRepository.delete(
      restaurant
    );
    const deletedRestaurant = createRestaurantFromRepository(
      deletedRestaurantRepository
    );
    return deletedRestaurant;
  }
}
 */