import { notUndefinedOrNull } from "@core/domain/services";
import { Password } from "./password.model";
import { Username } from "./username.model";

export class UserAuthentication {
  private username: Username;
  private password: Password;

  constructor(username: Username, password: Password) {
    this.username = notUndefinedOrNull(username);
    this.password = notUndefinedOrNull(password);
  }
}
