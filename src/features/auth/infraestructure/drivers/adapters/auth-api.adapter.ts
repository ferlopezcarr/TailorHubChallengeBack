import { Router } from "@core/infraestructure/routes/router";
import { Application, Request, Response } from "express";
import { User, UserAuthentication } from "../../../../user/domain";
import { LoginUseCase, RegisterUseCase } from "../../../application/use-cases";
import { UserAuthApi } from "../models/user-auth-api.model";
import { AuthApiPort } from "../ports/auth-api.port";



export class RestaurantApiAdapter extends Router implements AuthApiPort {

    constructor(
        private app: Application,
        private readonly loginUseCase: LoginUseCase,
        private readonly registerUseCase: RegisterUseCase,
    ) {
        super();

        // Routes
        const loginRoute = this.getApiPath("login");
        this.app.post(loginRoute, this.login.bind(this));
        const registerRoute = this.getApiPath("register");
        this.app.post(registerRoute, this.register.bind(this));
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const userAuthApi = req.body as UserAuthApi;
            const userAuthentication = await this.loginUseCase.execute(
                userAuthApi
            );
/*             const userWithAutenticationApi = ;
            res.status(200).json(userWithAutenticationApi); */
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async register(req: Request, res: Response): Promise<void> {
        try {
            const userAuthApi = req.body as UserAuthApi;
            const userAuthentication = await this.registerUseCase.execute(
                userAuthApi
            );
/*             const userWithAutenticationApi = ;
            res.status(200).json(userWithAutenticationApi); */
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
