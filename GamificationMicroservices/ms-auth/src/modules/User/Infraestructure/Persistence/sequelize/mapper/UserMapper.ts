import { User } from "../../../../Domain/User";
import UserEmail from "../../../../Domain/UserEmail";
import UserId from "../../../../Domain/UserId";
import UserPassword from "../../../../Domain/UserPassword";
import UserTypeId from "../../../../Domain/UserTypeId";
import UserModel from "../UserModel";

export class UserMapper {
  static convertUserModelToUser(userModel: UserModel): User {
    return new User(
      new UserId(userModel.userId),
      new UserEmail(userModel.email),
      new UserPassword(userModel.password),
      new UserTypeId(userModel.userTypeId)
    );
  }
}
