import { FieldNotProvidedException } from "../../../core/domain/exceptions/field-not-provided.exception";

export class Username {
  private username: string;

  constructor(username: string) {
    if (!username) {
      throw new FieldNotProvidedException();
    }
    this.username = username;
  }
}