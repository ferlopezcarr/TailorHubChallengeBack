import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class RestaurantName {
  private name: string;

  constructor(name: string) {
    notUndefinedOrNull(name);
    notEmptyString(name);
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}