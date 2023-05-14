import { Latitude } from "./latitude";
import { Longitude } from "./longitude";

export class Coordinates {
  latitude: Latitude;
  longitude: Longitude;

  constructor(latitude: number, longitude: number) {
    this.latitude = new Latitude(latitude);
    this.longitude = new Longitude(longitude);
  }
}