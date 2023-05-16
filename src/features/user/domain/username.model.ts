import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class Username {
  private username: string;

  constructor(username: string) {
    notUndefinedOrNull(username);
    notEmptyString(username);
    this.username = username;
  }
}