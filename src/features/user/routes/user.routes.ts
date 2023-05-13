import { Application, Request, Response } from "express";
import { Routes } from "../../../core/infraestructure/routes/routes";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

export class UserRoutes extends Routes {

    static readonly USER_ROUTE = "user";
    static readonly USERS_ROUTE = "users";

    constructor(
        private app: Application,
    ) {
        super(UserRoutes.USER_ROUTE);
        this.app.get(`${this.route}`, this.get);
        this.app.get(this.getApiPath(UserRoutes.USERS_ROUTE), this.getAll);
        this.app.post(this.route, this.create);
        this.app.put(`${this.route}`, this.update);
        this.app.patch(`${this.route}`, this.partialUpdate);
        this.app.delete(`${this.route}`, this.delete);
    }

    private getAll(req: Request, res: Response) {
        UserService.getInstance().getAll().then((users => {
            res.status(200).send(users);
        })).catch(error => {
            res.status(500).send(error);
        });
    }

    private get(req: Request, res: Response) {
        const { id, email } = req?.query;

        const hasUserId = (!!id && typeof(id) === "string" && id?.length > 0);
        const hasUserEmail = (!!email && typeof(email) === "string" && email?.length > 0);

        let userOperation;
        if (!hasUserId && !hasUserEmail) {
            return res.status(400).send("User id not provided");
        } else if (hasUserId) {
            userOperation = UserService.getInstance().findById(id);
        } else if (hasUserEmail) {
            userOperation = UserService.getInstance().findByEmail(email);
        }

        userOperation?.then((user => {
            if (!!user) {
                res.status(200).send(user);
            } else {
                res.status(404).send("User not found");
            }
        })).catch(error => {
            res.status(500).send(error);
        });
    }

    private create(req: Request, res: Response) {
        const user = req?.body?.user as User;

        if (!user) {
            return res.status(400).send("No user provided");
        }

        UserService.getInstance().create(user).then((user => {
            res.status(200).send(user);
        })).catch(error => {
            res.status(500).send(error);
        });
        /*
        try {
            const userCreate = await UserService.getInstance().create(user);
        } catch(error) {
            return res.status(400).send("No user provided");
        }
        */
    }

    private update(req: Request, res: Response) {
        const user = req?.body?.user as User;

        if (!user) {
            return res.status(400).send("No user provided");
        }

        UserService.getInstance().set(user).then((user => {
            res.status(200).send(user);
        })).catch(error => {
            res.status(500).send(error);
        });
    }

    private partialUpdate(req: Request, res: Response) {
        const user = req?.body?.user as User;

        if (!user) {
            return res.status(400).send("No user provided");
        }

        UserService.getInstance().update(user).then((user => {
            res.status(200).send(user);
        })).catch(error => {
            res.status(500).send(error);
        });
    }

    private delete(req: Request, res: Response) {
        const user = req?.body?.user as User;

        if (!user) {
            return res.status(400).send("No user provided");
        }

        UserService.getInstance().update(user).then((user => {
            res.status(200).send(user);
        })).catch(error => {
            res.status(500).send(error);
        });
    }

}