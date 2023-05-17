import { notUndefinedOrNull } from "@core/domain/services";

export class ReviewDate {
  constructor(private reviewDate: Date) {
    notUndefinedOrNull(reviewDate);
    this.reviewDate = reviewDate;
  }

  public getReviewDate(): Date {
    return this.reviewDate;
  }
}
