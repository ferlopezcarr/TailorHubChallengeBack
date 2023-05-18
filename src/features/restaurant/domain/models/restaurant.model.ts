import { notUndefinedOrNull } from "@core/domain/services";
import { Address } from "./address.model";
import { Coordinates } from "./coordinates.model";
import { CuisineType } from "./cuisine-type.model";
import { ImageUrl } from "./image-url.model";
import { Neighborhood } from "./neighborhood.model";
import { OperatingHoursMap } from "./operating-hours-map.model";
import { Photograph } from "./photograph.model";
import { RestaurantId } from "./restaurant-id.model";
import { RestaurantName } from "./restaurant-name.model";
import { Review } from "./reviews/review.model";

export class Restaurant {
  constructor(
    private id: RestaurantId,
    private name: RestaurantName,
    private neighborhood: Neighborhood,
    private photograph: Photograph,
    private address: Address,
    private location: Coordinates,
    private imageUrl: ImageUrl,
    private cuisineType: CuisineType,
    private operatingHours: OperatingHoursMap,
    private reviews: Review[]
  ) {
    this.id = notUndefinedOrNull(id);
    this.name = notUndefinedOrNull(name);
    this.neighborhood = notUndefinedOrNull(neighborhood);
    this.photograph = notUndefinedOrNull(photograph);
    this.address = notUndefinedOrNull(address);
    this.location = notUndefinedOrNull(location);
    this.imageUrl = notUndefinedOrNull(imageUrl);
    this.cuisineType = notUndefinedOrNull(cuisineType);
    this.operatingHours = notUndefinedOrNull(operatingHours);
    this.reviews = notUndefinedOrNull(reviews);
  }

  public getId(): RestaurantId {
    return this.id;
  }

  public getName(): RestaurantName {
    return this.name;
  }

  public getNeighborhood(): Neighborhood {
    return this.neighborhood;
  }

  public getPhotograph(): Photograph {
    return this.photograph;
  }

  public getAddress(): Address {
    return this.address;
  }

  public getLocation(): Coordinates {
    return this.location;
  }

  public getImageUrl(): ImageUrl {
    return this.imageUrl;
  }

  public getCuisineType(): CuisineType {
    return this.cuisineType;
  }

  public getOperatingHours(): OperatingHoursMap {
    return this.operatingHours;
  }

  public getReviews(): Review[] {
    return this.reviews;
  }
}
