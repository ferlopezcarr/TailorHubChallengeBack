import { notUndefinedOrNull } from "@core/domain/services";
import { Password, UserAuth } from "../../../../../features/auth/domain/models";
import { UserAuthApi } from "../../../../../features/auth/infraestructure/drivers/models/user-auth-api.model";
import { Username } from "../../../../../features/user/domain";

export const createUserAuthFromApi = (userAuthApi: UserAuthApi): UserAuth => {
  notUndefinedOrNull(userAuthApi);
  const username = new Username(userAuthApi.username);
  const password = new Password(userAuthApi.password);
  return new UserAuth(username, password);
};
