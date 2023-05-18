import { Middleware } from "@core/infraestructure/drivers/ports/middleware";
import { Application } from "express";
import { AuthRepositoryPort } from "../../auth/infraestructure/driven/ports/auth-repository.port";
import { RestaurantRepositoryPort } from "../../restaurant/infraestructure/driven/ports/restaurant-repository.port";
import { UserRepositoryPort } from "../infraestructure/driven/ports/user-repository.port";
import { UserApiAdapter } from "../infraestructure/drivers/adapters/user-api.adapter";
import {
  CreateUserUseCase,
  GetUserByIdUseCase,
} from "./use-cases";
import { MarkRestaurantAsFavouriteUseCase } from "./use-cases/mark-restaurant-as-favourite.use-case";

export class UserControlPlane {
  constructor(
    app: Application,
    authMiddleware: Middleware,
    authRepository: AuthRepositoryPort,
    userRepositoryPort: UserRepositoryPort,
    restaurantRespositoryPort: RestaurantRepositoryPort
  ) {
    // App
    const createUserUseCase = new CreateUserUseCase(userRepositoryPort, authRepository);
    const getUserByIdUseCase = new GetUserByIdUseCase(userRepositoryPort, restaurantRespositoryPort);
    const markRestaurantAsFavouriteUseCase = new MarkRestaurantAsFavouriteUseCase(
      userRepositoryPort,
      restaurantRespositoryPort
    );

    // Drivers
    new UserApiAdapter(
      app,
      authMiddleware,
      createUserUseCase,
      getUserByIdUseCase,
      markRestaurantAsFavouriteUseCase
    );
  }
}
