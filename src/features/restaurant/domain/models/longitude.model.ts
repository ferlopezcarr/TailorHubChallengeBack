import {
  isFloatNumber,
  maxNumber,
  minNumber,
  notUndefinedOrNull,
} from "@core/domain/services";

export class Longitude {
  public static readonly MIN_LONGITUDE = -180;
  public static readonly MAX_LONGITUDE = 180;

  private degrees: number;

  constructor(degrees: number) {
    notUndefinedOrNull(degrees);
    isFloatNumber(degrees);
    minNumber(degrees, Longitude.MIN_LONGITUDE);
    maxNumber(degrees, Longitude.MAX_LONGITUDE);
    this.degrees = degrees;
  }

  public getDegrees(): number {
    return this.degrees;
  }
}
