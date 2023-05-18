import { UseCase } from "@core/application/use-case";
import { UserId, Username } from "../../../user/domain";
import { UserRepositoryPort } from "../../../user/infraestructure/driven/ports/user-repository.port";
import { Token } from "../../domain/models/token.model";
import { AuthRepositoryPort } from "../../infraestructure/driven/ports/auth-repository.port";
import { generateJwtToken } from "../../infraestructure/driven/services";
import { UserAuthApi } from "../../infraestructure/drivers/models/user-auth-api.model";
import { EntityNotFoundException } from "../exceptions/entity-not-found.exception";
import { InvalidCredentialsException } from "../exceptions/invalid-credentials.exception";
import { createUserAuthFromApi } from "../../../../__tests__/features/auth/application/services/auth-factory.service";

export class LoginUseCase implements UseCase {
  constructor(
    private readonly authRepository: AuthRepositoryPort,
    private readonly userRepository: UserRepositoryPort
  ) {}

  async execute(userAuthApi: UserAuthApi): Promise<Token> {
    const userAuth = createUserAuthFromApi(userAuthApi);
    const isUserAuthenticated = await this.authRepository.login(userAuth);
    if (!isUserAuthenticated) {
      throw new InvalidCredentialsException();
    }
    const userFromRepository = await this.userRepository.getByUsername(
      userAuth.getUsername()
    );
    if (!userFromRepository) {
      throw new EntityNotFoundException();
    }
    const userId = new UserId(userFromRepository.id);
    const username = new Username(userFromRepository.username);
    const generatedToken = generateJwtToken(userId, username);
    return new Token(generatedToken);
  }
}
