import { Middleware } from "@core/infraestructure/drivers/ports/middleware";
import { AuthRepositoryPort } from "../infraestructure/driven/ports/auth-repository.port";
import { AuthMiddleware } from "../infraestructure/drivers/adapters/auth.middleware";
import { ValidateTokenUseCase } from "./use-cases/validate-token.use-case";

export class TokenControlPlane {
  private authRepositoryPort: Middleware;

  constructor(authRepositoryPort: AuthRepositoryPort) {
    // App
    const validateTokenUseCase = new ValidateTokenUseCase(authRepositoryPort);
    // Drivers
    this.authRepositoryPort = new AuthMiddleware(validateTokenUseCase);
  }

  getAuthMiddleware(): Middleware {
    return this.authRepositoryPort;
  }
}
