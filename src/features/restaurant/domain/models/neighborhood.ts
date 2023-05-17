import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class Neighborhood {
  private neighborhood: string;

  constructor(neighborhood: string) {
    notUndefinedOrNull(neighborhood);
    notEmptyString(neighborhood);
    this.neighborhood = neighborhood;
  }

  public getNeighborhood(): string {
    return this.neighborhood;
  }

}
