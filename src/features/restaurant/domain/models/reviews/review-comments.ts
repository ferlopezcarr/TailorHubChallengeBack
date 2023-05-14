import { notUndefinedOrNull } from "@core/domain/services/field-not-provided-validator.service";
import { notEmptyString } from "@core/domain/services/not-empty-validator.service";

export class ReviewComments {
  constructor(private reviewComments: string) {
    notUndefinedOrNull(reviewComments);
    notEmptyString(reviewComments);
    this.reviewComments = reviewComments;
  }
}
