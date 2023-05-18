import { notUndefinedOrNull } from "@core/domain/services";
import { Restaurant } from "../../../domain";
import { RestaurantApi } from "../models/restaurant-api.model";
import { createOperatingHoursMapApiFromOperatingHours } from "./operating-hours-map-api-factory.service";
import { createReviewApiFromReview } from "./review-factory.service";

export const createRestaurantApiFromRestaurant = (
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
    operating_hours: createOperatingHoursMapApiFromOperatingHours(
      restaurant.getOperatingHours()
    ),
    reviews: restaurant
      .getReviews()
      .map((review) => createReviewApiFromReview(review)),
  };
};
