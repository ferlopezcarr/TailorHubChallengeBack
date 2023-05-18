import {
  isFloatNumber,
  isIntegerNumber,
  maxNumber,
  minNumber,
  notUndefinedOrNull,
} from "@core/domain/services";

export class Latitude {
  public static readonly MIN_LATITUDE = -90;
  public static readonly MAX_LATITUDE = 90;

  private degrees: number;

  constructor(degrees: number) {
    notUndefinedOrNull(degrees);
    isFloatNumber(degrees);
    minNumber(degrees, Latitude.MIN_LATITUDE);
    maxNumber(degrees, Latitude.MAX_LATITUDE);
    this.degrees = degrees;
  }

  public getDegrees(): number {
    return this.degrees;
  }
}
