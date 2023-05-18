import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";
import { Middleware } from "@core/infraestructure/drivers/adapters/middlewares";
import { NextFunction, Request, Response } from "express";
import { ValidateTokenUseCase } from "../../../application/use-cases/validate-token.use-case";
import { AuthorizationHeaderNotProvidedException } from "../exceptions/authorization-header-not-provided.exception";
import { TokenNotProvidedException } from "../exceptions/token-not-provided.exception";
import { saveUserInLocals } from "../../../../user/infraestructure/drivers/services/user-locals.service";

export class AuthMiddleware implements Middleware {
  constructor(private readonly validateTokenUseCase: ValidateTokenUseCase) {}

  public async intercept(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const authorizationHeader = this.getAuthorizationHeader(request);
    const token = this.getTokenFromAuthorizationHeader(authorizationHeader);
    const userJwtPayload = await this.validateTokenUseCase.execute(token);
    if (!!userJwtPayload) {
      saveUserInLocals(response, userJwtPayload)
      next();
    } else {
      response.status(401).send("Unauthorized");
    }
  }

  private getAuthorizationHeader(request: Request): string {
    let authorizationHeader = request?.headers?.authorization;
    try {
      return notEmptyString(notUndefinedOrNull(authorizationHeader));
    } catch (error) {
      throw new AuthorizationHeaderNotProvidedException();
    }
  }

  private getTokenFromAuthorizationHeader(authorizationHeader: string): string {
    let token = authorizationHeader.replace("Bearer ", "");
    try {
      return notEmptyString(token);
    } catch (error) {
      throw new TokenNotProvidedException();
    }
  }
}
