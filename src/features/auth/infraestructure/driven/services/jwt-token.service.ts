import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";
import jwt, { SignOptions } from "jsonwebtoken";
import { ENV_CONFIG } from "../../../../../config/env.config";
import { UserId, Username } from "../../../../user/domain";
import { InvalidTokenException } from "../../../application/exceptions/invalid-token.exception";
import { UserJwtPayload } from "../models/user-jwt-payload.model";

const SECRET_KEY = ENV_CONFIG.JWT_SECRET;
const DEFAULT_SIGN_OPTIONS: SignOptions = {
  expiresIn: "7 days",
};

export const generateJwtToken = (id: UserId, username: Username): string => {
  notUndefinedOrNull(id);
  notUndefinedOrNull(username);
  const userJwtPayload: UserJwtPayload = {
    id: id.getId(),
    username: username.getUsername(),
  };
  return jwt.sign(userJwtPayload, SECRET_KEY, DEFAULT_SIGN_OPTIONS);
};

export const verify = (token: string): UserJwtPayload => {
  const tokenToVerify = notEmptyString(notUndefinedOrNull(token));
  const verifiedToken = jwt.verify(tokenToVerify, SECRET_KEY);
  const isTokenFormatCorrect = typeof verifiedToken !== "string";
  if (!isTokenFormatCorrect) {
    throw new InvalidTokenException();
  }
  return verifiedToken as UserJwtPayload;
};
