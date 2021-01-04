import { inject, injectable } from "inversify";
import { beans, Logger } from "../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import { User } from "../../Domain/User";
import { UserMapper } from "./sequelize/mapper/UserMapper";
import UserModel from "./sequelize/UserModel";

interface UserRepository {
    signUpUser(user: User): Promise<User>;
}

@injectable()
export class PostgressUserRepository implements UserRepository {
    protected logger : Logger;
    constructor(@inject(DEPENDENCY_TYPES.Logger) logger: Logger) {
        this.logger = logger
    }

    async signUpUser(user: User): Promise<User> {
        this.logger.info('Creating user');
        let userCreated : UserModel = await UserModel.create({
            email: user._userEmail._value,
            password: user._password._value,
            userTypeId: user._userTypeId._value
        })
        this.logger.info(`User: ${JSON.stringify(userCreated)} created`);
        return UserMapper.convertUserModelToUser(userCreated);
    }
}