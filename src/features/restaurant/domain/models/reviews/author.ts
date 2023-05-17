import { notUndefinedOrNull, notEmptyString } from "@core/domain/services";

export class Author {
  constructor(private author: string) {
    notUndefinedOrNull(author);
    notEmptyString(author);
    this.author = author;
  }

  public getAuthor(): string {
    return this.author;
  }
}
