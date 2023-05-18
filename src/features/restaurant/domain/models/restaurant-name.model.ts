import {
  maxLength,
  notEmptyString,
  notUndefinedOrNull,
} from "@core/domain/services";

export class RestaurantName {
  public static readonly RESTAURANT_NAME_MAX_LENGTH = 150;

  private name: string;

  constructor(name: string) {
    notUndefinedOrNull(name);
    notEmptyString(name);
    maxLength(name, RestaurantName.RESTAURANT_NAME_MAX_LENGTH);
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
