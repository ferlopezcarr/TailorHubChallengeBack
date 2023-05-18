import { notUndefinedOrNull } from "@core/domain/services";
import { Review } from "../../../domain";
import { ReviewRepository } from "../models/review-repository";

export const createReviewRepositoryFromReview = (
  review: Review
): ReviewRepository => {
  notUndefinedOrNull(review);
  return {
    name: review.getAuthor().getAuthor(),
    date: review.getDate().toString(),
    rating: review.getRating().getRating(),
    comments: review.getComments().getReviewComments(),
  };
};
