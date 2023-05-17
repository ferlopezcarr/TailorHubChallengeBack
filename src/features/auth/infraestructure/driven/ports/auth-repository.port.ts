import { UserAuthentication } from "../../../domain/models";
import { Token } from "../../../domain/models/token.model";

export interface AuthRepositoryPort {
    login(userAuthentication: UserAuthentication): Promise<Token>;
    register(userAuthentication: UserAuthentication): Promise<Token>;
    validate(token: Token): Promise<boolean>;
    logout(token: Token): Promise<boolean>;
}