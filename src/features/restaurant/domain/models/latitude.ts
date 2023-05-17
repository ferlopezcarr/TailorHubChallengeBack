import { notUndefinedOrNull } from "@core/domain/services";

export class Latitude {
  private readonly MIN_LATITUDE = -90;
  private readonly MAX_LATITUDE = 90;

  private degrees: number;

  constructor(degrees: number) {
    notUndefinedOrNull(degrees);
    if (degrees < this.MIN_LATITUDE || degrees > this.MAX_LATITUDE) {
      throw new Error(
        `Latitude must be greater than ${this.MIN_LATITUDE} and lower than ${this.MAX_LATITUDE}`
      );
    }
    this.degrees = degrees;
  }

  public getDegrees(): number {
    return this.degrees;
  }
}
