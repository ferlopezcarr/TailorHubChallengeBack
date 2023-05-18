import { notUndefinedOrNull } from "@core/domain/services";
import { Author } from "./author.model";
import { ReviewComments } from "./review-comments.model";
import { ReviewDate } from "./review-date.model";
import { ReviewRating } from "./review-rating.model";

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

  public getAuthor(): Author {
    return this.author;
  }

  public getDate(): ReviewDate {
    return this.date;
  }

  public getRating(): ReviewRating {
    return this.rating;
  }

  public getComments(): ReviewComments {
    return this.comments;
  }
}
