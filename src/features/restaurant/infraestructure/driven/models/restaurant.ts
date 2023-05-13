import { Review } from "./review";
import { Location } from "./location";

export interface Restaurant {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  address: string;
  latlng: Location;
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
  reviews: Review[];
}
