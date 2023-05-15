import {
  isIntegerNumber,
  isNaturalNumber,
  notUndefinedOrNull,
} from "@core/domain/services";

export class RestaurantId {
  private id: number;

  constructor(id: number) {
    notUndefinedOrNull(id);
    isIntegerNumber(id);
    isNaturalNumber(id);
    this.id = id;
  }
}
