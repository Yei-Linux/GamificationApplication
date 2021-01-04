import { inject, injectable } from "inversify";
import { beans } from "../../../../core/beans";
import { Specialization } from "../../Domain/Specialization";
import { PostgressSpecializationRepository } from "../../Infraestructure/Persistence/PostgressSpecializationRepository";
import { SpecializationMapper } from "../../Infraestructure/Persistence/sequelize/mapper/SpecializationMapper";
import { GetSpecializationServiceResponse } from "./GetSpecializationsServiceResponse";

beans.bind<PostgressSpecializationRepository>(PostgressSpecializationRepository).toSelf();

interface IGetSpecializationsService {
    getSpecializations() : Promise<GetSpecializationServiceResponse[]>
}

@injectable()
export class GetSpecializationsService implements IGetSpecializationsService {
  protected specializationRepository: PostgressSpecializationRepository;
  constructor(@inject(PostgressSpecializationRepository) specializationRepository: PostgressSpecializationRepository) {
    this.specializationRepository = specializationRepository;
  }

  async getSpecializations() : Promise<GetSpecializationServiceResponse[]> {
    let specializationsFound : Specialization[] = await this.specializationRepository.getSpecializations();
    return SpecializationMapper.convertSpecializationsToSpecializationService(specializationsFound);
  }
}
