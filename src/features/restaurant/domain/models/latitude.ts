import { FieldNotProvided } from "../../../core/domain/exceptions/field-not-provided.exception";

export class Latitude {

  public static readonly MIN_LATITUDE = -90;
  public static readonly MAX_LATITUDE = 90;

  private degrees: number;

  constructor(degrees: number) {
    if (degrees === undefined || degrees === null) {
      throw new FieldNotProvided()
    }
    if (degrees < Latitude.MIN_LATITUDE || degrees > Latitude.MAX_LATITUDE) {
      throw new FieldNotProvided()
    }
    this.degrees = degrees;
  }
}