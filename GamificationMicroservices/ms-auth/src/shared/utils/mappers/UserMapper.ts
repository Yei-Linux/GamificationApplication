import { User } from "../../../modules/User/Domain/User";
import UserModel from "../../../modules/User/Infraestructure/Persistence/UserModel";

export class UserMapper {
    static convertUserModelToUser(userModel: UserModel): User {
        return new User(userModel.userId,userModel.email,userModel.password,userModel.userTypeId);
    }
}