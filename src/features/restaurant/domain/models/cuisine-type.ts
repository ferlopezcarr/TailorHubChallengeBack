import { notUndefinedOrNull } from "../../../core/domain/services/field-not-provided.validator";

export class CuisineType {
  private cuisineType: string;

  constructor(cuisineType: string) {
    notUndefinedOrNull(cuisineType);
    this.cuisineType = cuisineType;
  }
}