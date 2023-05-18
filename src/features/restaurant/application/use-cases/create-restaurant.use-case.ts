import { UseCase } from "@core/application/use-case";
import { Restaurant } from "../../domain";
import { RestaurantRepositoryPort } from "../../infraestructure/driven/ports/restaurant-repository.port";
import { RestaurantApi } from "../../infraestructure/drivers/models/restaurant-api.model";
import {
  createRestaurantFromApi,
  createRestaurantFromRepository,
} from "../services/restaurant-factory.service";

export class CreateRestaurantUseCase implements UseCase {
  constructor(
    private readonly restaurantRepository: RestaurantRepositoryPort
  ) {}

  async execute(restaurantApi: RestaurantApi): Promise<Restaurant> {
    const restaurant = createRestaurantFromApi(restaurantApi);
    const createdRestaurantFromRepository =
      await this.restaurantRepository.create(restaurant);
    return createRestaurantFromRepository(
      createdRestaurantFromRepository
    );
  }
}
