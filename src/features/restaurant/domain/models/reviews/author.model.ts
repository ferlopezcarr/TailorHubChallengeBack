import {
  notUndefinedOrNull,
  notEmptyString,
  maxLength,
} from "@core/domain/services";

export class Author {
  public static readonly AUTHOR_MAX_LENGTH = 50;

  constructor(private author: string) {
    notUndefinedOrNull(author);
    notEmptyString(author);
    maxLength(author, Author.AUTHOR_MAX_LENGTH);
    this.author = author;
  }

  public getAuthor(): string {
    return this.author;
  }
}
