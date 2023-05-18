import { notUndefinedOrNull } from "@core/domain/services";
import { User } from "../../../domain";
import { Response } from "express";
import { UserJwtPayload } from "../../../../auth/infraestructure/driven/models";

const USER_LOCAL_KEY = "user";

export const saveUserInLocals = (
  response: Response,
  user: UserJwtPayload
): void => {
  notUndefinedOrNull(user);
  notUndefinedOrNull(response.locals);
  response.locals[USER_LOCAL_KEY] = user;
};

export const getUserFromLocals = (response: Response): UserJwtPayload => {
  notUndefinedOrNull(response.locals);
  return response.locals[USER_LOCAL_KEY];
};
