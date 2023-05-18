import { UseCase } from "@core/application/use-case";
import { Username } from "../../../user/domain";
import { UserJwtPayload } from "../../infraestructure/driven/models";
import { AuthRepositoryPort } from "../../infraestructure/driven/ports/auth-repository.port";
import { verify } from "../../infraestructure/driven/services";
import { EntityNotFoundException } from "../exceptions/entity-not-found.exception";
import { InvalidTokenException } from "../exceptions/invalid-token.exception";

export class ValidateTokenUseCase implements UseCase {
  constructor(private readonly authRepository: AuthRepositoryPort) {}

  async execute(headerToken: string): Promise<UserJwtPayload> {
    const payload: UserJwtPayload = verify(headerToken);
    if (!payload) {
      throw new InvalidTokenException();
    }
    const username = new Username(payload.username);
    const isUserRegistered = await this.authRepository.isUserRegistered(username);
    if (!isUserRegistered) {
      throw new EntityNotFoundException();
    }
    return payload;
  }
}
