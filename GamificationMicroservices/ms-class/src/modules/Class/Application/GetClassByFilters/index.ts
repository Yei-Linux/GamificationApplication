import { Injectable } from "@nestjs/common";
import StudyMethodId from "../../../StudyMethods/Domain/StudyMethodId";
import ThemeId from "../../../Theme/Domain/ThemeId";
import ClassId from "../../Domain/ClassId";
import { ClassStudy } from "../../Domain/ClassStudy";
import { PostgressClassRepository } from "../../Infraestructure/Persistence/PostgressClassRepository";
import { ClassMapper } from "../../Infraestructure/Persistence/sequelize/mapper/ClassMapper";
import { GetClassByFilterResponse } from "./response";

interface IGetClassByFiltersService {
    handle(themeId: ThemeId, studyMethodId: StudyMethodId): Promise<GetClassByFilterResponse>;
}

  @Injectable()
  export class GetClassByFiltersService implements IGetClassByFiltersService {
      constructor(private readonly classRepository: PostgressClassRepository) {}

      async handle(themeId: ThemeId, studyMethodId: StudyMethodId): Promise<GetClassByFilterResponse> {
        try {
          let classFound : ClassStudy = await this.classRepository.getClassByFilters(themeId, studyMethodId);
          return ClassMapper.convertDomainToUseCaseGetClassByFilters(classFound);
        } catch (error) {
          throw new Error(error);
        }
      }
  }
