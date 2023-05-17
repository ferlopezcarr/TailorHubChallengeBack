export class AuthRepository {
    constructor(
        private username: string,
        private hashedPassword: string,
    ) {
        this.username = username;
        this.hashedPassword = hashedPassword;
    }

    public getUsername(): string {
        return this.username;
    }

    public getHashedPassword(): string {
        return this.hashedPassword;
    }
}