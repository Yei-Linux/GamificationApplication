import { inject, injectable } from "inversify";
import { Logger } from "winston";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import PersonModel from "../../../../shared/infraestructure/Persistence/PersonModel";
import { User } from "../../../User/Domain/User";
import UserId from "../../../User/Domain/UserId";
import { UserMapper } from "../../../User/Infraestructure/Persistence/sequelize/mapper/UserMapper";
import UserModel from "../../../User/Infraestructure/Persistence/sequelize/UserModel";
import { Tutor } from "../../Domain/Tutor";
import TutorCode from "../../Domain/TutorCode";
import { TutorRepository } from "../../Domain/TutorRepository";
import { TutorMapper } from "./sequelize/mapper/TutorMapper";
import TutorModel from "./sequelize/TutorModel";

@injectable()
export class PostgressTutorRepository implements TutorRepository {
    protected logger : Logger;
    constructor(@inject(DEPENDENCY_TYPES.Logger) logger: Logger) {
        this.logger = logger
    }

    async getTutorByIdentifier(identifier: TutorCode): Promise<[Tutor,User]> {
        this.logger.info('Searching tutor by identifier');
        let tutorFound : TutorModel[] = await TutorModel.findAll({
            where: { tutorCode: identifier._value },
            include: [{
                model: PersonModel,
                include: [{
                    model: UserModel
                }]
            }]
        });
        this.logger.info(`Tutor: ${JSON.stringify(tutorFound)} found`);
        return tutorFound.length > 0 ? [TutorMapper.convertTutorModelToTutor(tutorFound[0]["PersonModel"],tutorFound[0]),UserMapper.convertUserModelToUser(tutorFound[0]["PersonModel"]["UserModel"])] : [null,null];
    }

    async signUpTutor(tutor: Tutor, userIdCreated: UserId ,idiomId: string, specializationId: string, collegeId : string): Promise<Tutor> {
        this.logger.info('Creating Person and Tutor');
        let personCreated : PersonModel = await PersonModel.create({fullName: tutor._fullName._value, lastName: tutor._lastName._value, surName: tutor._surName._value, age: tutor._age._value, userId:userIdCreated._value, idiomId: idiomId,specializationId: specializationId});
        this.logger.info(`Person: ${JSON.stringify(personCreated)} created`);
        let studentCreated: TutorModel = await TutorModel.create({tutorCode: tutor._tutorCode._value, personId: personCreated.personId, collegeId: collegeId});
        this.logger.info(`Tutor: ${JSON.stringify(studentCreated)} created`);

        return TutorMapper.convertTutorModelToTutor(personCreated,studentCreated);
    }
}