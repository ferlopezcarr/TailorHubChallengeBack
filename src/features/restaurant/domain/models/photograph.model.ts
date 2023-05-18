import {
  maxLength,
  notEmptyString,
  notUndefinedOrNull,
} from "@core/domain/services";

export class Photograph {
  public static readonly PHOTOGRAPH_MAX_LENGTH = 250;

  private photograph: string;

  constructor(photograph: string) {
    notUndefinedOrNull(photograph);
    notEmptyString(photograph);
    maxLength(photograph, Photograph.PHOTOGRAPH_MAX_LENGTH);
    this.photograph = photograph;
  }

  public getPhotograph(): string {
    return this.photograph;
  }
}
