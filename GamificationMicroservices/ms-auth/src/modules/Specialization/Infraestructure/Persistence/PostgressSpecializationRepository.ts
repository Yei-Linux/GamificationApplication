import { inject, injectable } from "inversify";
import { Logger } from "winston";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import { Specialization } from "../../Domain/Specialization";
import { SpecializationRepository } from "../../Domain/SpecializationRepository";
import { SpecializationMapper } from "./sequelize/mapper/SpecializationMapper";
import SpecializationModel from "./sequelize/SpecializationModel";

@injectable()
export class PostgressSpecializationRepository implements SpecializationRepository {
    protected logger : Logger;
    constructor(@inject(DEPENDENCY_TYPES.Logger) logger: Logger) {
        this.logger = logger
    }

    async getSpecializations(): Promise<Specialization[]> {
        this.logger.info('Searching specializations');
        let specializationsFound : SpecializationModel[] = await SpecializationModel.findAll();
        this.logger.info(`Specializations Found: ${JSON.stringify(specializationsFound)}`);
        return SpecializationMapper.convertSpecializationModelToSpecializations(specializationsFound);
    }
}