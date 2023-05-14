import { notUndefinedOrNull } from "@core/domain/services/field-not-provided-validator.service";

export class ReviewDate {
  constructor(private reviewDate: Date) {
    notUndefinedOrNull(reviewDate);
    this.reviewDate = reviewDate;
  }
}
