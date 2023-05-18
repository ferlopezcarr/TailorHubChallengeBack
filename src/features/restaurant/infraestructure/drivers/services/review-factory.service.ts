import { notUndefinedOrNull } from "@core/domain/services";
import { Review } from "../../../domain";
import { ReviewApi } from "../models/review-api.model";

export const createReviewApiFromReview = (review: Review): ReviewApi => {
  notUndefinedOrNull(review);
  return {
    name: review.getAuthor().getAuthor(),
    date: review.getDate().getReviewDate(),
    rating: review.getRating().getRating(),
    comments: review.getComments().getReviewComments(),
  };
};
