import { notUndefinedOrNull } from "@core/domain/services/field-not-provided-validator.service";
import { notEmptyString } from "@core/domain/services/not-empty-validator.service";

export class Author {
  constructor(private author: string) {
    notUndefinedOrNull(author);
    notEmptyString(author);
    this.author = author;
  }
}
