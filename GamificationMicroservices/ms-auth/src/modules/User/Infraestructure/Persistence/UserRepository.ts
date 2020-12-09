import { inject, injectable } from "inversify";
import { beans, Logger } from "../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import PersonModel from "../../../../shared/infraestructure/Persistence/PersonModel";
import { Student } from "../../../Student/Domain/Student";
import StudentModel from "../../../Student/Infraestructure/Persistence/StudentModel";
import { User } from "../../Domain/User";
import UserModel from "./UserModel";

interface IUserRepository {
    registerStudent(student: Student,userIdCreated: string,idiomId: string, specializationId: string,languageProgrammingId: string): Promise<StudentModel>
    registerUser(user: User): Promise<UserModel>;
}

@injectable()
export class UserRepository implements IUserRepository {
    protected logger : Logger;
    constructor(@inject(DEPENDENCY_TYPES.Logger) logger: Logger) {
        this.logger = logger
    }
    async registerStudent(student: Student, userIdCreated: string,idiomId: string, specializationId: string,languageProgrammingId: string): Promise<any> {
        this.logger.info('Creating Person and Student');
        let personCreated : PersonModel = await PersonModel.create({fullName: student.fullName, lastName: student.lastName, surName: student.surName, age: student.age, userId:userIdCreated, idiomId: idiomId,specializationId: specializationId});
        this.logger.info(`Person: ${JSON.stringify(personCreated)} created`);
        let studentCreated: StudentModel = await StudentModel.create({studentCode: student.identifier, personId: personCreated.personId, languageProgrammingId: languageProgrammingId});
        this.logger.info(`Student: ${JSON.stringify(studentCreated)} created`);
        return [studentCreated,personCreated];
    }

    async registerUser(user: User): Promise<UserModel> {
        this.logger.info('Creating user');
        let userCreated : UserModel = await UserModel.create({
            email: user.email,
            password: user.password,
            userTypeId: user.userTypeId
        })
        this.logger.info(`User: ${JSON.stringify(userCreated)} created`);
        return userCreated;
    }
}