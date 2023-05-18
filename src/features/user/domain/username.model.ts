import { maxLength, notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class Username {
  public static readonly USERNAME_MAX_LENGTH = 50;

  constructor(private username: string) {
    notUndefinedOrNull(username);
    notEmptyString(username);
    maxLength(username, Username.USERNAME_MAX_LENGTH);
    this.username = username;
  }

  public getUsername(): string {
    return this.username;
  }
}