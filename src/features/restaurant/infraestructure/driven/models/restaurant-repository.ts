import { LocationRepository } from "./location-repository";
import { OperatingHoursMapRepository } from "./operating-hours-map-repository";
import { ReviewRepository } from "./review-repository";

export interface RestaurantRepository {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  address: string;
  latlng: LocationRepository;
  image: string;
  cuisine_type: string;
  operating_hours: OperatingHoursMapRepository;
  reviews: ReviewRepository[];
}
