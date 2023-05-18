import { notUndefinedOrNull } from "@core/domain/services";
import { Password } from "./password.model";
import { Username } from "../../../user/domain/username.model";

export class UserAuth {
  private username: Username;
  private password: Password;

  constructor(username: Username, password: Password) {
    this.username = notUndefinedOrNull(username);
    this.password = notUndefinedOrNull(password);
  }

  public getUsername(): Username {
    return this.username;
  }

  public getPassword(): Password {
    return this.password;
  }
}
