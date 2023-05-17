import { CrudRepostory } from "@core/infraestructure/crud.repository";
import { User, UserId } from "../../../domain";
import { UserRepository } from "../models/user-repository.model";

export interface UserRespositoryPort
  extends CrudRepostory<User, UserRepository> {
  create(user: User): Promise<UserRepository>;
  getById(restaurantId: UserId): Promise<UserRepository>;
  getAll(): Promise<UserRepository[]>;
  update(user: User): Promise<UserRepository>;
  delete(user: User): Promise<UserRepository>;
  markAsFavorite(user: User): Promise<UserRepository>;
}
