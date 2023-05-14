import { ReviewRepository } from "./review";
import { LocationRepository } from "./location";

export interface RestaurantRepository {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  address: string;
  latlng: LocationRepository;
  image: string;
  cuisine_type: string;
  operating_hours: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  reviews: ReviewRepository[];
}
