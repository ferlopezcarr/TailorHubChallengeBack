import { FieldNotProvided } from "../../../core/domain/exceptions/field-not-provided.exception";

export class RestaurantId {
  private id: number;

  constructor(id: number) {
    if (id === undefined || id === null) {
      throw new FieldNotProvided();
    }
    this.id = id;
  }
}
