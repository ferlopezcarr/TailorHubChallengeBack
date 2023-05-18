import {
  maxLength,
  notEmptyString,
  notUndefinedOrNull,
} from "@core/domain/services";

export class Neighborhood {
  public static readonly NEIGHBORHOOD_MAX_LENGTH = 50;

  private neighborhood: string;

  constructor(neighborhood: string) {
    notUndefinedOrNull(neighborhood);
    notEmptyString(neighborhood);
    maxLength(neighborhood, Neighborhood.NEIGHBORHOOD_MAX_LENGTH);
    this.neighborhood = neighborhood;
  }

  public getNeighborhood(): string {
    return this.neighborhood;
  }
}
