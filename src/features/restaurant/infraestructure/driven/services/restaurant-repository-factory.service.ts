import { notUndefinedOrNull } from "@core/domain/services";
import { Restaurant } from "../../../domain";
import { RestaurantRepository } from "../models/restaurant-repository";
import { createOperatingHoursMapRepositoryFromOperatingHoursMap } from "./operating-hours-map-repository.factory.service";
import { createReviewRepositoryFromReview } from "./review-repository-factory.service";

export const createRestaurantRepositoryFromRestaurant = (
  restaurant: Restaurant
): RestaurantRepository => {
  notUndefinedOrNull(restaurant);
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
    operating_hours: createOperatingHoursMapRepositoryFromOperatingHoursMap(
      restaurant.getOperatingHours()
    ),
    reviews: restaurant
      .getReviews()
      ?.map((review) => createReviewRepositoryFromReview(review)),
  };
};
