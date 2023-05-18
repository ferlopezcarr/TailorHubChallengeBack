import {
  isIntegerNumber,
  isNaturalNumber,
  maxNumber,
  notUndefinedOrNull,
} from "@core/domain/services";

export class ReviewRating {
  private readonly MAXIMUM_RATING = 5;

  constructor(private rating: number) {
    notUndefinedOrNull(rating);
    isIntegerNumber(rating);
    isNaturalNumber(rating);
    maxNumber(rating, this.MAXIMUM_RATING);
    this.rating = rating;
  }

  public getRating(): number {
    return this.rating;
  }
}
