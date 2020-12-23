import { inject, injectable } from "inversify";
import { Logger } from "winston";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import PersonModel from "../../../../shared/infraestructure/Persistence/PersonModel";
import UserId from "../../../User/Domain/UserId";
import { Tutor } from "../../Domain/Tutor";
import { TutorRepository } from "../../Domain/TutorRepository";
import { TutorMapper } from "./sequelize/mapper/TutorMapper";
import TutorModel from "./sequelize/TutorModel";

@injectable()
export class PostgressTutorRepository implements TutorRepository {
    protected logger : Logger;
    constructor(@inject(DEPENDENCY_TYPES.Logger) logger: Logger) {
        this.logger = logger
    }

    async signUpTutor(tutor: Tutor, userIdCreated: UserId ,idiomId: string, specializationId: string, collegeId : string): Promise<Tutor> {
        this.logger.info('Creating Person and Tutor');
        let personCreated : PersonModel = await PersonModel.create({fullName: tutor._fullName._value, lastName: tutor._lastName._value, surName: tutor._surName._value, age: tutor._age._value, userId:userIdCreated._value, idiomId: idiomId,specializationId: specializationId});
        this.logger.info(`Person: ${JSON.stringify(personCreated)} created`);
        let studentCreated: TutorModel = await TutorModel.create({studentCode: tutor._tutorCode._value, personId: personCreated.personId, collegeId: collegeId});
        this.logger.info(`Tutor: ${JSON.stringify(studentCreated)} created`);

        return TutorMapper.convertTutorModelToTutor(personCreated,studentCreated);
    }
}