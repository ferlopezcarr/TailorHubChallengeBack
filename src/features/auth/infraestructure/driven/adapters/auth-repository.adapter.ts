
import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";
import { UserAuthentication } from "../../../domain/models";
import { Token } from "../../../domain/models/token.model";
import { AuthRepository } from "../models/auth-repository.model";
import { AuthRepositoryPort } from "../ports/auth-repository.port";
import { checkPassword, createPasswordHash } from "../services/bcrypt.service";

export class AuthInMemoryRepositoryAdapter
    implements AuthRepositoryPort {
    private readonly authentications: AuthRepository[] = [];

    async login(userAuthentication: UserAuthentication): Promise<Token> {
        notUndefinedOrNull(userAuthentication);
        const password = userAuthentication.getPassword().getPassword();
        const authentication = this.authentications.find((auth) => checkPassword(password, auth.getHashedPassword()));
        notUndefinedOrNull(authentication);
    }

    register(userAuthentication: UserAuthentication): Promise<Token> {
        notUndefinedOrNull(userAuthentication)
    }

    validate(token: Token): Promise<boolean> {
        notUndefinedOrNull(token);

    }

    logout(token: Token): Promise<boolean> {
        notUndefinedOrNull(token)
    }
}
