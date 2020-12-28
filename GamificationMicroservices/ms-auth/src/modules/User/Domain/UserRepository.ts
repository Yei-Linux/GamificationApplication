import { User } from "./User";

export interface UserRepository {
    signUpUser(user: User): Promise<User>;
}