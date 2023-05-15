import { notUndefinedOrNull } from "@core/domain/services";

export class Longitude {
  public static readonly MIN_LONGITUDE = -180;
  public static readonly MAX_LONGITUDE = 180;

  private degrees: number;

  constructor(degrees: number) {
    notUndefinedOrNull(degrees);
    if (
      degrees < Longitude.MIN_LONGITUDE ||
      degrees > Longitude.MAX_LONGITUDE
    ) {
      throw new Error(
        `Longitude must be greater than ${Longitude.MIN_LONGITUDE} and lower than ${Longitude.MAX_LONGITUDE}`
      );
    }
    this.degrees = degrees;
  }
}
