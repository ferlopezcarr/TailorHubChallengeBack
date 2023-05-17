import { UseCase } from "@core/application/use-case";
import { UserAuthentication, UserWithAuth } from "../../domain/models";

export class RegisterUseCase implements UseCase {
    constructor(
      private readonly authRepository: AuthRespositoryPort
    ) {}
  
    async execute(userAuthentication: UserAuthentication): Promise<UserWithAuth> {
      const restaurant = createRestaurantFromApi(restaurantApi);
      const createdRestaurantFromRepository =
        await this.authRepository.create(restaurant);
      const createdRestaurant = createRestaurantFromRepository(
        createdRestaurantFromRepository
      );
      return createdRestaurant;
    }
  }
  