import { FieldNotProvidedValidator } from "../../../core/domain/services/field-not-provided-validator.service";

export class UserId {
  private id: string;
  constructor(id: string) {
    FieldNotProvidedValidator.notUndefinedOrNull(id);
    this.id = id;
  }
}