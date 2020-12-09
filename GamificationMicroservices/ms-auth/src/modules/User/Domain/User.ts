import { ValueObject } from "../../../shared/domain/valueObject";
import * as bcrypt from "bcrypt"

export class User {
  constructor(
    public userId: string,
    public email: string,
    public password: string,
    public userTypeId: string
  ) {
  }

  get _userId() : string {
    return this.userId;
  }

  get _userName(): string {
    return this.email;
  }

  get _password(): string {
    return this.password;
  }

  get _userTypeId() : string {
    return this.userTypeId;
  }

  async hashingPassword() :Promise<void>{
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
  }
}
