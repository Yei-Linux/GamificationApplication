import { inject, injectable } from "inversify";
import { Logger } from "winston";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import PersonModel from "../../../../shared/infraestructure/Persistence/PersonModel";
import UserId from "../../../User/Domain/UserId";
import { Student } from "../../Domain/Student";
import { StudentRepository } from "../../Domain/StudentRepository";
import { StudentMapper } from "./sequelize/mapper/StudentMapper";
import StudentModel from "./sequelize/StudentModel";

@injectable()
export class PostgressStudentRepository implements StudentRepository {
    protected logger : Logger;
    constructor(@inject(DEPENDENCY_TYPES.Logger) logger: Logger) {
        this.logger = logger
    }

    async signUpStudent(student: Student, userIdCreated: UserId ,idiomId: string, specializationId: string,languageProgrammingId: string): Promise<Student> {
        this.logger.info('Creating Person and Student');
        let personCreated : PersonModel = await PersonModel.create({fullName: student._fullName._value, lastName: student._lastName._value, surName: student._surName._value, age: student._age._value, userId:userIdCreated._value, idiomId: idiomId,specializationId: specializationId});
        this.logger.info(`Person: ${JSON.stringify(personCreated)} created`);
        let studentCreated: StudentModel = await StudentModel.create({studentCode: student._studentCode._value, personId: personCreated.personId, languageProgrammingId: languageProgrammingId});
        this.logger.info(`Student: ${JSON.stringify(studentCreated)} created`);

        return StudentMapper.convertStudentModelToStudent(personCreated,studentCreated);
    }
}