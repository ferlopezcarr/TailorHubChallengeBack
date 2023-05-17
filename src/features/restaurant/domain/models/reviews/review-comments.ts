import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class ReviewComments {
  constructor(private reviewComments: string) {
    notUndefinedOrNull(reviewComments);
    notEmptyString(reviewComments);
    this.reviewComments = reviewComments;
  }

  public getReviewComments(): string {
    return this.reviewComments;
  }
}
