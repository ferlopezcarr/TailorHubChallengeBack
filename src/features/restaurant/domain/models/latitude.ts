import { notUndefinedOrNull } from "@core/domain/services";

export class Latitude {
  public static readonly MIN_LATITUDE = -90;
  public static readonly MAX_LATITUDE = 90;

  private degrees: number;

  constructor(degrees: number) {
    notUndefinedOrNull(degrees);
    if (degrees < Latitude.MIN_LATITUDE || degrees > Latitude.MAX_LATITUDE) {
      throw new Error(
        `Latitude must be greater than ${Latitude.MIN_LATITUDE} and lower than ${Latitude.MAX_LATITUDE}`
      );
    }
    this.degrees = degrees;
  }
}
