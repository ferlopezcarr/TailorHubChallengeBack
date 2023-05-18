import {
  maxLength,
  notEmptyString,
  notUndefinedOrNull,
} from "@core/domain/services";

export class Password {
  public static readonly PASSWORD_MAX_LENGTH = 50;

  private password: string;

  constructor(password: string) {
    notUndefinedOrNull(password);
    notEmptyString(password);
    maxLength(password, Password.PASSWORD_MAX_LENGTH);
    this.password = password;
  }

  public getPassword(): string {
    return this.password;
  }
}
