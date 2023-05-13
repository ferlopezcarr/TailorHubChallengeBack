import { FieldNotProvided } from "../../../core/domain/exceptions/field-not-provided-exception";

export class Longitude {

  public static readonly MIN_LONGITUDE = -180;
  public static readonly MAX_LONGITUDE = 180;

  private degrees: number;

  constructor(degrees: number) {
    if (degrees === undefined || degrees === null) {
      throw new FieldNotProvided()
    }
    if (degrees < Longitude.MIN_LONGITUDE || degrees > Longitude.MAX_LONGITUDE) {
      throw new FieldNotProvided()
    }
    this.degrees = degrees;
  }
}