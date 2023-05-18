import { UseCase } from "@core/application/use-case";
import { EntityNotFoundException } from "../../../auth/application/exceptions/entity-not-found.exception";
import { createUserAuthFromApi } from "../../../../__tests__/features/auth/application/services/auth-factory.service";
import { Token } from "../../../auth/domain/models/token.model";
import { AuthRepositoryPort } from "../../../auth/infraestructure/driven/ports/auth-repository.port";
import { generateJwtToken } from "../../../auth/infraestructure/driven/services";
import { UserAuthApi } from "../../../auth/infraestructure/drivers/models/user-auth-api.model";
import { UserId, Username } from "../../domain";
import { UnregisteredUser } from "../../domain/unregistered-user.model";
import { UserRepositoryPort } from "../../infraestructure/driven/ports/user-repository.port";
import { UnregisteredUserApi } from "../../infraestructure/drivers/models/unregistered-user-api.model";

export class CreateUserUseCase implements UseCase {
  constructor(
    private readonly userRepository: UserRepositoryPort,
    private readonly authRepository: AuthRepositoryPort
  ) {}

  async execute(
    userAuthApi: UserAuthApi,
    unregisteredUserApi: UnregisteredUserApi
  ): Promise<Token> {
    const userAuth = createUserAuthFromApi(userAuthApi);
    const username = new Username(unregisteredUserApi.username);
    const unregisteredUser = new UnregisteredUser(username);

    const userAuthRegistered = await this.authRepository.register(userAuth);
    if (!userAuthRegistered) {
      throw new EntityNotFoundException();
    }
    const userFromRepository = await this.userRepository.create(
      unregisteredUser
    );
    if (!userFromRepository) {
      throw new EntityNotFoundException();
    }
    const userId = new UserId(userFromRepository.id);
    const generatedToken = generateJwtToken(userId, username);
    return new Token(generatedToken);
  }
}
