import {
    maxLength,
    notEmptyString,
    notUndefinedOrNull,
} from "@core/domain/services";

export class Token {
  public static readonly TOKEN_MAX_LENGTH = 4096;

  constructor(private token: string) {
    notUndefinedOrNull(token);
    notEmptyString(token);
    maxLength(token, Token.TOKEN_MAX_LENGTH);
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }
}
