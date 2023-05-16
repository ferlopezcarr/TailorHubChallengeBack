import { notUndefinedOrNull } from "@core/domain/services";

export class Password {
  private password: string;

  constructor(password: string) {
    notUndefinedOrNull(password);
    this.password = password;
  }
}
