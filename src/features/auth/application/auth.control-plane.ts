import { Application } from "express";
import { UserRepositoryPort } from "../../user/infraestructure/driven/ports/user-repository.port";
import { AuthRepositoryPort } from "../infraestructure/driven/ports/auth-repository.port";
import { AuthApiAdapter } from "../infraestructure/drivers/adapters/auth-api.adapter";
import { LoginUseCase } from "./use-cases";

export class AuthControlPlane {
  constructor(
    app: Application,
    authRepositoryPort: AuthRepositoryPort,
    userRepositoryPort: UserRepositoryPort
  ) {
    // App
    const loginUseCase = new LoginUseCase(authRepositoryPort, userRepositoryPort);

    // Drivers
    new AuthApiAdapter(
      app,
      loginUseCase,
    );
  }
}
