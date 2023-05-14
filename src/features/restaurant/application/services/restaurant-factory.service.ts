import { notUndefinedOrNull } from "@core/domain/services/field-not-provided-validator.service";
import { notEmptyArray } from "@core/domain/services/not-empty-validator.service";
import { Address } from "../../domain/models/address";
import { Coordinates } from "../../domain/models/coordinates";
import { CuisineType } from "../../domain/models/cuisine-type";
import { ImageUrl } from "../../domain/models/image-url";
import { Neighborhood } from "../../domain/models/neighborhood";
import { Photograph } from "../../domain/models/photograph";
import { Restaurant } from "../../domain/models/restaurant";
import { RestaurantId } from "../../domain/models/restaurant-id";
import { RestaurantName } from "../../domain/models/restaurant-name";
import { Author } from "../../domain/models/reviews/author";
import { Review } from "../../domain/models/reviews/review";
import { ReviewComments } from "../../domain/models/reviews/review-comments";
import { ReviewDate } from "../../domain/models/reviews/review-date";
import { ReviewRating } from "../../domain/models/reviews/review-rating";
import { createOperatingHoursMapFromApi } from "../../domain/services/operating-hours-factory.service";
import { RestaurantApi } from "../../infraestructure/drivers/models/restaurant-api.model";
import { RestaurantRepository } from "../../infraestructure/driven/models/restaurant";

export const createRestaurantFromApi = (restaurantApi: RestaurantApi): Restaurant => {
  const restaurantId = new RestaurantId(restaurantApi.id);
  const restaurantName = new RestaurantName(restaurantApi.name);
  const neighborhood = new Neighborhood(restaurantApi.neighborhood);
  const photograph = new Photograph(restaurantApi.photograph);
  const address = new Address(restaurantApi.address);
  const location = new Coordinates(
    restaurantApi.latlng.lat,
    restaurantApi.latlng.lng
  );
  const imageUrl = new ImageUrl(restaurantApi.image);
  const cuisineType = new CuisineType(restaurantApi.cuisine_type);
  const operatingHours = createOperatingHoursMapFromApi(restaurantApi.operating_hours);
  notUndefinedOrNull(restaurantApi.reviews);
  notEmptyArray(restaurantApi.reviews);
  const reviews = restaurantApi.reviews.map(
    (review) =>
      new Review(
        new Author(review.name),
        new ReviewDate(review.date),
        new ReviewRating(review.rating),
        new ReviewComments(review.comments)
      )
  );

  return new Restaurant(
    restaurantId,
    restaurantName,
    neighborhood,
    photograph,
    address,
    location,
    imageUrl,
    cuisineType,
    operatingHours,
    reviews
  );
};

export const createRestaurantFromRepository = (restaurantApi: RestaurantRepository): Restaurant => {
  const restaurantId = new RestaurantId(restaurantApi.id);
  const restaurantName = new RestaurantName(restaurantApi.name);
  const neighborhood = new Neighborhood(restaurantApi.neighborhood);
  const photograph = new Photograph(restaurantApi.photograph);
  const address = new Address(restaurantApi.address);
  const location = new Coordinates(
    restaurantApi.latlng.lat,
    restaurantApi.latlng.lng
  );
  const imageUrl = new ImageUrl(restaurantApi.image);
  const cuisineType = new CuisineType(restaurantApi.cuisine_type);
  const operatingHours = createOperatingHoursMapFromApi(restaurantApi.operating_hours);
  notUndefinedOrNull(restaurantApi.reviews);
  notEmptyArray(restaurantApi.reviews);
  const reviews = restaurantApi.reviews.map(
    (review) =>
      new Review(
        new Author(review.name),
        new ReviewDate(review.date),
        new ReviewRating(review.rating),
        new ReviewComments(review.comments)
      )
  );

  return new Restaurant(
    restaurantId,
    restaurantName,
    neighborhood,
    photograph,
    address,
    location,
    imageUrl,
    cuisineType,
    operatingHours,
    reviews
  );
};
