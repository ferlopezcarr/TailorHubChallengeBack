/* import { UseCase } from "@core/application/use-case";
import { Restaurant } from "../../domain";
import { RestaurantRespositoryPort } from "../../infraestructure/driven/ports/restaurant-respository.port";
import { RestaurantApi } from "../../infraestructure/drivers/models/restaurant-api.model";
import {
  createRestaurantFromApi,
  createRestaurantFromRepository,
} from "../services/restaurant-factory.service";

export class UpdateRestaurantUseCase implements UseCase {
  constructor(
    private readonly restaurantRepository: RestaurantRespositoryPort
  ) {}

  async execute(restaurantApi: RestaurantApi): Promise<Restaurant> {
    const restaurant = createRestaurantFromApi(restaurantApi);
    const updatedRestaurantFromRepository =
      await this.restaurantRepository.update(restaurant);
    const updatedRestaurant = createRestaurantFromRepository(
      updatedRestaurantFromRepository
    );
    return updatedRestaurant;
  }
}
 */