/* import { UseCase } from "@core/application/use-case";
import { User } from "../../domain";

export class CreateUserUseCase implements UseCase {
  constructor(
    private readonly restaurantRepository: RestaurantRespositoryPort
  ) {}

  async execute(restaurantApi: RestaurantApi): Promise<User> {
    const restaurant = createRestaurantFromApi(restaurantApi);
    const createdRestaurantFromRepository =
      await this.restaurantRepository.create(restaurant);
    const createdRestaurant = createRestaurantFromRepository(
      createdRestaurantFromRepository
    );
    return createdRestaurant;
  }
}
 */