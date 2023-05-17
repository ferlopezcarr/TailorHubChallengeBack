import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class Photograph {
  private photograph: string;

  constructor(photograph: string) {
    notUndefinedOrNull(photograph);
    notEmptyString(photograph);
    this.photograph = photograph;
  }

  public getPhotograph(): string {
    return this.photograph;
  }
}
