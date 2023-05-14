import { FieldNotProvidedException } from "../../../core/domain/exceptions/field-not-provided.exception";

export class Password {
  private password: string;

  constructor(password: string) {
    if (!password) {
      throw new FieldNotProvidedException();
    }
    this.password = password;
  }
}
