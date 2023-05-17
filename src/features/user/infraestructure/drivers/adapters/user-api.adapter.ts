import { Application, Request, Response } from "express";
import { UserApiPort } from "../ports/user-api.port";
import { Router } from "../../../../../core/infraestructure/routes/router";

export class UserApiAdapter extends Router implements UserApiPort {
  private readonly USER_ROUTE = "restaurant";
  private readonly USERS_ROUTE = "restaurants";

  constructor(
    private app: Application,
/*     private readonly getRestaurantByIdUseCase: GetRestaurantByIdUseCase,
    private readonly getAllRestaurantsUseCase: GetAllRestaurantsUseCase,
    private readonly createRestaurantUseCase: CreateRestaurantUseCase,
    private readonly updateRestaurantUseCase: UpdateRestaurantUseCase,
    private readonly deleteRestaurantUseCase: DeleteRestaurantUseCase */
  ) {
    super();

    // Routes
    const userRoute = this.getApiPath(this.USER_ROUTE);
    const usersFullRoute = this.getApiPath(this.USERS_ROUTE);

    this.app.get(`${userRoute}/:id`, this.getById.bind(this));
    this.app.get(usersFullRoute, this.getAll.bind(this));
    this.app.post(userRoute, this.create.bind(this));
    this.app.put(userRoute, this.update.bind(this));
    this.app.delete(userRoute, this.delete.bind(this));
  }

  async getById(req: Request, res: Response): Promise<void> {}
  async getAll(req: Request, res: Response): Promise<void> {}
  async create(req: Request, res: Response): Promise<void> {}
  async update(req: Request, res: Response): Promise<void> {}
  async delete(req: Request, res: Response): Promise<void> {}
  async markRestaurantAsFavorite(req: Request, res: Response): Promise<void> {}
}
