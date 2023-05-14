import { FieldNotProvided } from "../../../core/domain/exceptions/field-not-provided.exception";

export class RestaurantName {
  private name: string;

  constructor(name: string) {
    if (name === undefined || name === null) {
      throw new FieldNotProvided();
    }
    this.name = name;
  }
}