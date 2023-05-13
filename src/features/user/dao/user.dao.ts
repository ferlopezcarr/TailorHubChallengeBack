import { BaseRepository } from "../../../core/infraestructure/crud.repository";
import { FileService } from "../../../core/services/file.service";
import { User } from "../models/user.model";

export class UserDAO extends BaseRepository {

    private readonly DATABASE_NAME = "users";
    private readonly DATABASE_FILE = `${this.DATABASE_NAME}.json`;
    private readonly DATABASE_PATH = `../../features/user/data/${this.DATABASE_FILE}`;

    private static _instance: UserDAO;

    constructor() {
        super();
    }

    public static getInstance(): UserDAO {
        return (!!UserDAO._instance ? UserDAO._instance : new UserDAO());
    }

    public async getAll(): Promise<User[]> {
        return FileService.getInstance().readFile(this.DATABASE_PATH).then(users => (users as User[]));
    }

    public async create(newUser: User): Promise<User> {
        newUser.id = BaseRepository.getId();
        newUser.active = true;
        newUser.creationDate = new Date();
        // Delete deleteDate property
        Reflect.deleteProperty(newUser, 'deleteDate');
        const users = await this.getAll();
        users.push(newUser);
        return FileService.getInstance().writeFile(this.DATABASE_PATH, users).then(() => newUser);
    }

    public async update(user: User): Promise<User> {
        const users = await this.getAll();
        const userIndex = users.findIndex(userDatabase => userDatabase?.email === user?.email);
        users[userIndex] = user;
        return FileService.getInstance().writeFile(this.DATABASE_PATH, users).then(() => user);
    }

}