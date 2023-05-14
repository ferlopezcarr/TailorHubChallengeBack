import { notUndefinedOrNull } from "../../../core/domain/services/field-not-provided.validator";

export class Photograph {
  private photograph: string;

  constructor(photograph: string) {
    notUndefinedOrNull(photograph);
    this.photograph = photograph;
  }
}
