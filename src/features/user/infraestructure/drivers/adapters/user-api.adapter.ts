import { Middleware } from "@core/infraestructure/drivers/ports/middleware";
import { Application, Request, Response } from "express";
import { Router } from "../../../../../core/infraestructure/drivers/models/router";
import {
  CreateUserUseCase,
  GetUserByIdUseCase,
  MarkRestaurantAsFavouriteUseCase,
} from "../../../application/use-cases";
import { UserApiPort } from "../ports/user-api.port";
import { UserAuthApi } from "../../../../auth/infraestructure/drivers/models/user-auth-api.model";
import { TokenApiResponse } from "../../../../auth/infraestructure/drivers/models/token-api-response.model";
import { UserId } from "../../../domain";
import {
  isIntegerNumber,
  isNaturalNumber,
  isNumber,
  notEmptyString,
  notUndefinedOrNull,
} from "@core/domain/services";
import { createUserApiFromUser } from "../services";
import { getUserFromLocals } from "../services/user-locals.service";

export class UserApiAdapter extends Router implements UserApiPort {
  private readonly USER_ROUTE = "user";

  constructor(
    app: Application,
    authMiddleware: Middleware,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly markRestaurantAsFavouriteUseCase: MarkRestaurantAsFavouriteUseCase
  ) {
    super();

    // Routes
    const userRoute = this.getApiPath(this.USER_ROUTE);

    const authMiddlewareWithContext =
      authMiddleware.intercept.bind(authMiddleware);

    app.get(
      `${userRoute}/:id`,
      authMiddlewareWithContext,
      this.getById.bind(this)
    );
    app.post(userRoute, this.create.bind(this));
    app.post(
      `${userRoute}/favorite-restaurant`,
      authMiddlewareWithContext,
      this.markRestaurantAsFavourite.bind(this)
    );
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const userId = isNumber(
        notEmptyString(notUndefinedOrNull(req.params?.id))
      );
      const user = await this.getUserByIdUseCase.execute(userId);
      const userApi = createUserApiFromUser(user);
      res.status(200).json(userApi);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const userAuthApi = req.body as UserAuthApi;
      const token = await this.createUserUseCase.execute(
        userAuthApi,
        userAuthApi
      );
      const tokenApiResponse: TokenApiResponse = {
        token: token.getToken(),
      };
      res.status(200).json(tokenApiResponse);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // FIXME: Implement this methods
  async markRestaurantAsFavourite(req: Request, res: Response): Promise<void> {
    try {
      const restaurantId = isNumber(
        notEmptyString(notUndefinedOrNull(req.body?.id))
      );
      const favouriteState = !!req.body?.favourite;
      const userFromToken = getUserFromLocals(res);
      const userId = isNaturalNumber(notUndefinedOrNull(userFromToken?.id));
      const user = await this.markRestaurantAsFavouriteUseCase.execute(
        userId,
        restaurantId,
        favouriteState
      );
      const userApi = createUserApiFromUser(user);
      res.status(200).json(userApi);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
