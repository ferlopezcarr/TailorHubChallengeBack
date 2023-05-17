import { notUndefinedOrNull, notEmptyString } from "@core/domain/services";

export class CuisineType {
  private cuisineType: string;

  constructor(cuisineType: string) {
    notUndefinedOrNull(cuisineType);
    notEmptyString(cuisineType);
    this.cuisineType = cuisineType;
  }

  public getCuisineType(): string {
    return this.cuisineType;
  }
}
