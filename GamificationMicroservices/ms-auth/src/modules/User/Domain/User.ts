import * as bcrypt from "bcrypt"
import UserEmail from "./UserEmail";
import UserId from "./UserId";
import UserPassword from "./UserPassword";
import UserTypeId from "./UserTypeId";

export class User {
  constructor(
    private userId: UserId,
    private email: UserEmail,
    private password: UserPassword,
    private userTypeId: UserTypeId
  ) {
  }

  get _userId() : UserId {
    return this.userId;
  }

  get _userEmail(): UserEmail {
    return this.email;
  }

  get _password(): UserPassword {
    return this.password;
  }

  get _userTypeId() : UserTypeId {
    return this.userTypeId;
  }

  public static create(userId : UserId,email : UserEmail,password : UserPassword,userTypeId : UserTypeId) {
    let user : User = new User(userId,email,password,userTypeId);
    return user;
  }

  async hashingPassword() : Promise<void>{
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(this.password._value,salt);
    this.password = new UserPassword(hashPassword);
  }

  async validatePassword( passwordPlain : string ) : Promise<boolean> {
    return await bcrypt.compare(passwordPlain,this.password._value);
  }
}
