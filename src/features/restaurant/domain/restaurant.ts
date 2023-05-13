import { Address } from "cluster";
import { Review } from "../infraestructure/driven/models/review";
import { Coordinates } from "./coordinates";
import { OperationHoursMap } from "./operating-hours-map";
import { RestaurantId } from "./restaurant-id";
import { RestaurantName } from "./restaurant-name";

export class Restaurant {
  private id: RestaurantId;
  private name: RestaurantName;
  private neighborhood: Neighborhood;
  private photograph: Photograph;
  private address: Address;
  private location: Coordinates;
  private imageUrl: ImageUrl;
  private cuisineType: CuisineType;
  private operatingHours: OperationHoursMap;
  private reviews: List<Review>;
}
