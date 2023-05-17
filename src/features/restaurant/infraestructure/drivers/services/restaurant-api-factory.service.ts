import { notUndefinedOrNull } from "@core/domain/services";
import { Restaurant } from "../../../domain";
import { RestaurantApi } from "../models/restaurant-api.model";
import { createOperatingHoursMapApiFromDomain } from "./operating-hours-map-api-factory.service";
import { createReviewApiFromDomain } from "./review-factory.service";

export const createRestaurantApiFromDomain = (
  restaurant: Restaurant
): RestaurantApi => {
  notUndefinedOrNull(restaurant);
  notUndefinedOrNull(restaurant.getReviews());
  return {
    id: restaurant.getId().getId(),
    name: restaurant.getName().getName(),
    neighborhood: restaurant.getNeighborhood().getNeighborhood(),
    photograph: restaurant.getPhotograph().getPhotograph(),
    address: restaurant.getAddress().getAddress(),
    latlng: {
      lat: restaurant.getLocation().getLatitude().getDegrees(),
      lng: restaurant.getLocation().getLongitude().getDegrees(),
    },
    image: restaurant.getImageUrl().getImageUrl(),
    cuisine_type: restaurant.getCuisineType().getCuisineType(),
    operating_hours: createOperatingHoursMapApiFromDomain(
      restaurant.getOperatingHours()
    ),
    reviews: restaurant
      .getReviews()
      .map((review) => createReviewApiFromDomain(review)),
  };
};
