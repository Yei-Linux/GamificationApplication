import { inject, injectable } from "inversify";
import { Logger } from "winston";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import PersonModel from "../../../../shared/infraestructure/Persistence/PersonModel";
import UserId from "../../../User/Domain/UserId";
import { ExternalPerson } from "../../Domain/ExternalPerson";
import { ExternalPersonRepository } from "../../Domain/ExternalPersonRepository";
import ExternalPersonModel from "./sequelize/ExternalPersonModel";
import { ExternalPersonMapper } from "./sequelize/mapper/ExternalPersonMapper";
@injectable()
export class PostgressExternalPersonRepository implements ExternalPersonRepository {
    protected logger : Logger;
    constructor(@inject(DEPENDENCY_TYPES.Logger) logger: Logger) {
        this.logger = logger
    }

    async signUpExternalPerson(externalPerson: ExternalPerson,userIdCreated: UserId,idiomId: string, specializationId: string,languageProgrammingId: string): Promise<ExternalPerson> {
        this.logger.info('Creating Person and External');
        let personCreated : PersonModel = await PersonModel.create({fullName: externalPerson._fullName._value, lastName: externalPerson._lastName._value, surName: externalPerson._surName._value, age: externalPerson._age._value, userId:userIdCreated._value, idiomId: idiomId,specializationId: specializationId});
        this.logger.info(`Person: ${JSON.stringify(personCreated)} created`);
        let externalPersonCreated: ExternalPersonModel = await ExternalPersonModel.create({personId: personCreated.personId, languageProgrammingId: languageProgrammingId});
        this.logger.info(`External Person: ${JSON.stringify(externalPersonCreated)} created`);

        return ExternalPersonMapper.convertExternalPersonModelToExternalPerson(personCreated,externalPersonCreated);
    }
}