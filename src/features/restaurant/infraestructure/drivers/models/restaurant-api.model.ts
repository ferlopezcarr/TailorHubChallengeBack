import { ReviewApi } from "./review-api.model";
import { LocationApi } from "./location-api.model";
import { OperatingHoursMapApi } from "./operating-hours-map-api.model";

export interface RestaurantApi {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  address: string;
  latlng: LocationApi;
  image: string;
  cuisine_type: string;
  operating_hours: OperatingHoursMapApi;
  reviews: ReviewApi[];
}
