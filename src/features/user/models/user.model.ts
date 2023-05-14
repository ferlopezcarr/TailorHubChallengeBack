import { notUndefinedOrNull } from "../../../core/domain/services/field-not-provided-validator.service";
import { Restaurant } from "../../restaurant/domain/restaurant";
import { UserId } from "./user-id.model";
import { Username } from "./username.model";

export class User {
    private id: UserId;
    private username: Username;
    private favouriteRestaurants: Restaurant[];

    constructor(
        id: UserId,
        username: Username,
        favouriteRestaurants: Restaurant[],
    ) {
        this.id = notUndefinedOrNull(id);
        this.username = notUndefinedOrNull(username);
        this.favouriteRestaurants = notUndefinedOrNull(favouriteRestaurants);
    }
}
