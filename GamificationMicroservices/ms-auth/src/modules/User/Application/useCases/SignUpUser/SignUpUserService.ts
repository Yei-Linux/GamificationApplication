import { inject, injectable } from "inversify";
import { beans } from "../../../../../core/beans";
import { User } from "../../../Domain/User";
import UserEmail from "../../../Domain/UserEmail";
import UserPassword from "../../../Domain/UserPassword";
import UserTypeId from "../../../Domain/UserTypeId";
import { PostgressUserRepository } from "../../../Infraestructure/Persistence/PostgressUserRepository";

interface ISignUpUserService {
  signUpUser(email : UserEmail ,password : UserPassword ,userTypeId : UserTypeId) : Promise<User>
}

@injectable()
export class SignUpUserService implements ISignUpUserService {
  protected userRespository: PostgressUserRepository;
  constructor(@inject(PostgressUserRepository) userRepository: PostgressUserRepository) {
    this.userRespository = userRepository;
  }

  public async signUpUser(email : UserEmail ,password : UserPassword ,userTypeId : UserTypeId) : Promise<User> {
    let user : User = User.create(null, email , password ,userTypeId);
    await user.hashingPassword();
    let userCreated : User = await this.userRespository.signUpUser(user);
    return userCreated;
  }
}
