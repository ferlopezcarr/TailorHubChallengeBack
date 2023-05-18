import { Router } from "@core/infraestructure/drivers/models/router";
import { Application, Request, Response } from "express";
import { createUserApiFromUser } from '../../../../user/infraestructure/drivers/services/user-api-factory.service';
import { LoginUseCase } from "../../../application/use-cases";
import { UserAuthApi } from "../models/user-auth-api.model";
import { AuthApiPort } from "../ports/auth-api.port";
import { TokenApiResponse } from '../models/token-api-response.model';

export class AuthApiAdapter extends Router implements AuthApiPort {
  constructor(
    app: Application,
    private readonly loginUseCase: LoginUseCase,
  ) {
    super();

    // Routes
    const loginRoute = this.getApiPath("login");
    app.post(loginRoute, this.login.bind(this));
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const userAuthApi = req.body as UserAuthApi;
      const token = await this.loginUseCase.execute(userAuthApi);
      const tokenApiResponse: TokenApiResponse = {
        token: token.getToken(),
      }
      res.status(200).json(tokenApiResponse);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
