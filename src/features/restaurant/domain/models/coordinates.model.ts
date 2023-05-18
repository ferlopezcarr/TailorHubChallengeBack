import { notUndefinedOrNull } from "@core/domain/services";
import { Latitude } from "./latitude.model";
import { Longitude } from "./longitude.model";

export class Coordinates {
  constructor(private latitude: Latitude, private longitude: Longitude) {
    this.latitude = notUndefinedOrNull(latitude);
    this.longitude = notUndefinedOrNull(longitude);
  }

  public getLatitude(): Latitude {
    return this.latitude;
  }

  public getLongitude(): Longitude {
    return this.longitude;
  }
}
