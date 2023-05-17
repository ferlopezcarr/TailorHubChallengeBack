import { notUndefinedOrNull } from "@core/domain/services";

export class Longitude {
  private readonly MIN_LONGITUDE = -180;
  private readonly MAX_LONGITUDE = 180;

  private degrees: number;

  constructor(degrees: number) {
    notUndefinedOrNull(degrees);
    if (
      degrees < this.MIN_LONGITUDE ||
      degrees > this.MAX_LONGITUDE
    ) {
      throw new Error(
        `Longitude must be greater than ${this.MIN_LONGITUDE} and lower than ${this.MAX_LONGITUDE}`
      );
    }
    this.degrees = degrees;
  }

  public getDegrees(): number {
    return this.degrees;
  }
}
