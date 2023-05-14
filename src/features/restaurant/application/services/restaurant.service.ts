import { RestaurantId } from "../../domain/models/restaurant-id";
import { RestaurantRespositoryPort } from "../../infraestructure/driven/ports/restaurant-respository.port";
import { RestaurantApi } from "../../infraestructure/drivers/models/restaurant-api.model";

export class RestaurantService {
  constructor(
    private readonly restaurantRepository: RestaurantRespositoryPort
  ) {}

  async getById(id: number): Promise<RestaurantApi> {
    const restaurantId = new RestaurantId(id);
    const restaurantRepository = await this.restaurantRepository.getById(
      restaurantId
    );
    const restaurant = restaurantRepository as unknown as RestaurantApi;
    return restaurant;
  }

  getAll(): Promise<RestaurantApi[]> {
    throw new Error("Method not implemented.");
  }

  create(restaurantApi: RestaurantApi): Promise<RestaurantApi> {
    throw new Error("Method not implemented.");
  }

  update(restaurantApi: RestaurantApi): Promise<RestaurantApi> {
    throw new Error("Method not implemented.");
  }

  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
