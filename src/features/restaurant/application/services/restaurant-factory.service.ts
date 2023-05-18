import { notEmptyArray, notUndefinedOrNull } from "@core/domain/services";
import {
  Address,
  Author,
  Coordinates,
  CuisineType,
  ImageUrl,
  Latitude,
  Longitude,
  Neighborhood,
  Photograph,
  Restaurant,
  RestaurantId,
  RestaurantName,
  Review,
  ReviewComments,
  ReviewDate,
  ReviewRating,
  createOperatingHoursMapFromApi,
  createOperatingHoursMapFromRepository,
} from "../../domain";
import { RestaurantRepository } from "../../infraestructure/driven/models/restaurant-repository";
import { RestaurantApi } from "../../infraestructure/drivers/models/restaurant-api.model";

export const createRestaurantFromApi = (
  restaurantApi: RestaurantApi
): Restaurant => {
  notUndefinedOrNull(restaurantApi);
  const restaurantId = new RestaurantId(restaurantApi.id);
  const restaurantName = new RestaurantName(restaurantApi.name);
  const neighborhood = new Neighborhood(restaurantApi.neighborhood);
  const photograph = new Photograph(restaurantApi.photograph);
  const address = new Address(restaurantApi.address);
  const latitude = new Latitude(restaurantApi.latlng.lat);
  const longitude = new Longitude(restaurantApi.latlng.lng);
  const location = new Coordinates(latitude, longitude);
  const imageUrl = new ImageUrl(restaurantApi.image);
  const cuisineType = new CuisineType(restaurantApi.cuisine_type);
  const operatingHours = createOperatingHoursMapFromApi(
    restaurantApi.operating_hours
  );
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

export const createRestaurantFromRepository = (
  restaurantRepository: RestaurantRepository
): Restaurant => {
  notUndefinedOrNull(restaurantRepository);
  const restaurantId = new RestaurantId(restaurantRepository.id);
  const restaurantName = new RestaurantName(restaurantRepository.name);
  const neighborhood = new Neighborhood(restaurantRepository.neighborhood);
  const photograph = new Photograph(restaurantRepository.photograph);
  const address = new Address(restaurantRepository.address);
  const latitude = new Latitude(restaurantRepository.latlng.lat);
  const longitude = new Longitude(restaurantRepository.latlng.lng);
  const location = new Coordinates(latitude, longitude);
  const imageUrl = new ImageUrl(restaurantRepository.image);
  const cuisineType = new CuisineType(restaurantRepository.cuisine_type);
  const operatingHours = createOperatingHoursMapFromRepository(
    restaurantRepository.operating_hours
  );
  notUndefinedOrNull(restaurantRepository.reviews);
  notEmptyArray(restaurantRepository.reviews);
  const reviews = restaurantRepository.reviews.map((review) => {
    const date = new Date(review.date);
    return new Review(
      new Author(review.name),
      new ReviewDate(date),
      new ReviewRating(review.rating),
      new ReviewComments(review.comments)
    );
  });

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
