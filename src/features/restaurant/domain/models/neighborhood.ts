import { notUndefinedOrNull } from "../../../core/domain/services/field-not-provided.validator";

export class Neighborhood {
  private neighborhood: string;

  constructor(neighborhood: string) {
    notUndefinedOrNull(neighborhood);
    this.neighborhood = neighborhood;
  }
}