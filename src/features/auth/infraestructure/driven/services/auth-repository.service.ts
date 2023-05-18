import { notUndefinedOrNull } from "@core/domain/services";
import { UserAuth } from "../../../domain/models";
import { UserAuthRepository } from "../models";
import { createPasswordHash } from "./bcrypt.service";

export const createUserAuthRepositoryFromUserAuth = async (
  userAuth: UserAuth
): Promise<UserAuthRepository> => {
  notUndefinedOrNull(userAuth);
  return {
    username: userAuth.getUsername().getUsername(),
    hashedPassword: await createPasswordHash(
      userAuth.getPassword().getPassword()
    ),
  };
};
