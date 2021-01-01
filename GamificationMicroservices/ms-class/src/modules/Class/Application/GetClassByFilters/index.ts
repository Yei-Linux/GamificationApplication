import { Injectable } from "@nestjs/common";
import StudyMethodId from "../../../StudyMethods/Domain/StudyMethodId";
import ThemeId from "../../../Theme/Domain/ThemeId";
import ClassId from "../../Domain/ClassId";
import { PostgressClassRepository } from "../../Infraestructure/Persistence/PostgressClassRepository";

interface IGetClassByFiltersService {
    handle(themeId: ThemeId, studyMethodId: StudyMethodId): Promise<any>;
}

  @Injectable()
  export class GetClassByFiltersService implements IGetClassByFiltersService {
      constructor(private readonly classRepository: PostgressClassRepository) {}

      async handle(themeId: ThemeId, studyMethodId: StudyMethodId): Promise<any> {
        return await this.classRepository.getClassByFilters(themeId, studyMethodId);
      }
  }
