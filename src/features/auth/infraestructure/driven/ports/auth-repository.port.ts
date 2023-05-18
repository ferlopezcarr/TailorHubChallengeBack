import { Username } from "../../../../user/domain";
import { UserAuth } from "../../../domain/models";

export interface AuthRepositoryPort {
  isUserRegistered(username: Username): Promise<boolean>;
  login(userAuthentication: UserAuth): Promise<boolean>;
  register(userAuthentication: UserAuth): Promise<boolean>;
}
