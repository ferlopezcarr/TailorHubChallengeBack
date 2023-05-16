import { notUndefinedOrNull } from "@core/domain/services";
import { Author } from "./author";
import { ReviewComments } from "./review-comments";
import { ReviewDate } from "./review-date";
import { ReviewRating } from "./review-rating";

export class Review {
  constructor(
    private author: Author,
    private date: ReviewDate,
    private rating: ReviewRating,
    private comments: ReviewComments
  ) {
    this.author = notUndefinedOrNull(author);
    this.date = notUndefinedOrNull(date);
    this.rating = notUndefinedOrNull(rating);
    this.comments = notUndefinedOrNull(comments);
  }
}
