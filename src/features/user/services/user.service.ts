import { UserDAO } from "../dao/user.dao";
import { User } from "../models/user.model";
import { USER_ERRORS } from "../utils/user.error";
import { UserParser } from "../utils/user.parser";

export class UserService {
    
    private static _instance: UserService;

    constructor() {
    }

    public static getInstance(): UserService {
        return (!!UserService._instance ? UserService._instance : new UserService());
    }

    public async getAll(): Promise<User[]> {
        return UserDAO.getInstance().getAll().then(users => {
            return users?.map(user => {
                user.creationDate = (!!user.creationDate ? new Date(user.creationDate) : user.creationDate);
                user.deleteDate = (!!user.deleteDate ? new Date(user.deleteDate) : user.deleteDate);
                return user;
            });
        });
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        if (!email || email?.length <= 0) {
            return Promise.reject(USER_ERRORS.notProvided);
        }

        let users: User[] = [];
        try {
            users = await this.getAll();
        } catch(error) {
            console.error(error);
            return Promise.reject(USER_ERRORS.notFound);
        }
        
        return users?.find(userDatabase => userDatabase.email === email);
    }

    public async findById(userId: string): Promise<User | undefined> {
        if (!userId || userId?.length <= 0) {
            return Promise.reject(USER_ERRORS.notProvided);
        }

        let users: User[] = [];
        try {
            users = await this.getAll();
        } catch(error) {
            console.error(error);
            return Promise.reject(USER_ERRORS.notFound);
        }
        
        return users?.find(userDatabase => userDatabase.id === userId);
    }

    public async create(newUser: User): Promise<any | null> {
        if (!newUser || !newUser?.email || newUser?.email?.length <= 0) {
            return Promise.reject(USER_ERRORS.notProvided);
        }

        const userFound = await this.findByEmail(newUser?.email);
        if (!!userFound) {
            return Promise.reject(USER_ERRORS.alreadyExists);
        }

        return UserDAO.getInstance().create(newUser);
    }

    public async set(user: User): Promise<any | null> {
        if (!user) {
            return Promise.reject(USER_ERRORS.notProvided);
        } else {
            if (!user?.email || user?.email?.length <= 0) {
                return Promise.reject(USER_ERRORS.email.notProvided);
            } else if (!user?.name || user?.name?.length <= 0) {
                return Promise.reject(USER_ERRORS.name.notProvided);
            } else if (!user?.lastname1 || user?.lastname1?.length <= 0) {
                return Promise.reject(USER_ERRORS.lastname1.notProvided);
            }
        }

        const userFound = await this.findByEmail(user?.email);
        if (!userFound || !userFound?.active) {
            return Promise.reject(USER_ERRORS.notExists);
        }

        userFound.email = user.email;
        userFound.name = user.name;
        userFound.lastname1 = user.lastname1;
        userFound.lastname2 = user.lastname2;
        userFound.postalCode = user.postalCode;

        return UserDAO.getInstance().update(userFound);
    }

    public async update(user: User): Promise<any | null> {
        if (!user) {
            return Promise.reject(USER_ERRORS.notProvided);
        } else if (!user?.email || user?.email?.length <= 0) {
            return Promise.reject(USER_ERRORS.email.notProvided);
        }

        const userFound = await this.findByEmail(user?.email);
        if (!userFound || !userFound?.active) {
            return Promise.reject(USER_ERRORS.notExists);
        }

        const userParsed = UserParser.parse(userFound, user);

        return UserDAO.getInstance().update(userParsed);
    }

    public async delete(id: string): Promise<any | null> {
        if (!id || id?.length <= 0) {
            return Promise.reject(USER_ERRORS.notProvided);
        }

        const userFound = await this.findById(id);
        if (!userFound || !userFound?.active) {
            return Promise.reject(USER_ERRORS.notExists);
        } else {
            userFound.active = false;
            userFound.deleteDate = new Date();
            return UserDAO.getInstance().update(userFound);
        }
    }

}