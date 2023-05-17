import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class Password {
  private password: string;

  constructor(password: string) {
    notUndefinedOrNull(password);
    notEmptyString(password);
    this.password = password;
  }

  public getPassword(): string {
    return this.password;
  }
}
