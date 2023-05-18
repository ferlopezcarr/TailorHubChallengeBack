import {
  maxLength,
  notEmptyString,
  notUndefinedOrNull,
} from "@core/domain/services";

export class ReviewComments {
  public static readonly REVIEW_COMMENTS_MAX_LENGTH = 2000;

  constructor(private reviewComments: string) {
    notUndefinedOrNull(reviewComments);
    notEmptyString(reviewComments);
    maxLength(reviewComments, ReviewComments.REVIEW_COMMENTS_MAX_LENGTH);
    this.reviewComments = reviewComments;
  }

  public getReviewComments(): string {
    return this.reviewComments;
  }
}
