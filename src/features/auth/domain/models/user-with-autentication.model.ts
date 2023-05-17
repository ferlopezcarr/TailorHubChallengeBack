import { User } from "../../../user/domain";
import { Token } from "./token.model";

export type UserWithAuth = User & Token;