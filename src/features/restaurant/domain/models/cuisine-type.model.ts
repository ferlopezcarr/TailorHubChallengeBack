import {
  notUndefinedOrNull,
  notEmptyString,
  maxLength,
} from "@core/domain/services";

export class CuisineType {
  public static readonly CUSINE_TYPE_MAX_LENGTH = 50;

  private cuisineType: string;

  constructor(cuisineType: string) {
    notUndefinedOrNull(cuisineType);
    notEmptyString(cuisineType);
    maxLength(cuisineType, CuisineType.CUSINE_TYPE_MAX_LENGTH);
    this.cuisineType = cuisineType;
  }

  public getCuisineType(): string {
    return this.cuisineType;
  }
}
