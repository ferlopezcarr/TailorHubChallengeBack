import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class Token {
    constructor(
        private token: string,
    ) {
        notUndefinedOrNull(token);
        notEmptyString(token);
        this.token = token;
    }

    public getToken(): string {
        return this.token;
    }
}