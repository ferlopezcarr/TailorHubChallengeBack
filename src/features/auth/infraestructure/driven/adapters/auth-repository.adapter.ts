import { notUndefinedOrNull } from "@core/domain/services";
import { Username } from "../../../../user/domain";
import { AccountAlreadyExistsException } from "../../../application/exceptions/account-already-exists.exception";
import { UserAuth } from "../../../domain/models";
import { UserAuthRepository } from "../models";
import { AuthRepositoryPort } from "../ports/auth-repository.port";
import { createUserAuthRepositoryFromUserAuth } from "../services/auth-repository.service";
import { checkPassword } from "../services/bcrypt.service";

export class AuthInMemoryRepositoryAdapter implements AuthRepositoryPort {
  private readonly authentications: UserAuthRepository[] = [];

  isUserRegistered(username: Username): Promise<boolean> {
    notUndefinedOrNull(username);
    const isUserRegistered = !!this.authentications?.find(
      (auth) => auth.username === username.getUsername()
    );
    return Promise.resolve(isUserRegistered);
  }

  async login(userAuthentication: UserAuth): Promise<boolean> {
    notUndefinedOrNull(userAuthentication);
    const userPassword = userAuthentication.getPassword().getPassword();
    const areCredentialsCorrect = !!this.authentications.find((auth) => {
      let found =
        auth.username === userAuthentication.getUsername().getUsername();
      if (!!found) {
        found = checkPassword(userPassword, auth.hashedPassword);
      }
      return found;
    });
    return areCredentialsCorrect;
  }

  async register(userAuth: UserAuth): Promise<boolean> {
    notUndefinedOrNull(userAuth);
    const isUserRegistered = this.authentications?.find(
      (auth) => auth.username === userAuth.getUsername().getUsername()
    );
    if (!!isUserRegistered) {
      throw new AccountAlreadyExistsException();
    }
    const userAuthForRespository = await createUserAuthRepositoryFromUserAuth(
      userAuth
    );
    this.authentications.push(userAuthForRespository);
    return Promise.resolve(true);
  }
}
