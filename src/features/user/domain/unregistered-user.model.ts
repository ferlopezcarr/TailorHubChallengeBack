import { notUndefinedOrNull } from "@core/domain/services";
import { Username } from "./username.model";

export class UnregisteredUser {
  private username: Username;

  constructor(
    username: Username,
  ) {
    this.username = notUndefinedOrNull(username);
  }

  public getUsername(): Username {
    return this.username;
  }
}
