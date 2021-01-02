import { Injectable, Logger } from '@nestjs/common';
import { RoadMapRequest } from '../../../../backend/controllers/RoadMap/RoadMapRequest';
import { GetClassByFiltersService } from '../../../Class/Application/GetClassByFilters';
import ClassId from '../../../Class/Domain/ClassId';
import CourseId from '../../../Course/Domain/CourseId';
import StudyMethodId from '../../../StudyMethods/Domain/StudyMethodId';
import ThemeId from '../../../Theme/Domain/ThemeId';
import RoadMapEmail from '../../Domain/RoadMapEmail';
import RoadMapOrder from '../../Domain/RoadMapOrder';
import { PostgressRoadMapRepository } from '../../Infraestructure/Persistence/PostgressRoadMapRepository';

interface IInsertStudentRoadMap {
  handle(userEmail: string, studentRoadMap: RoadMapRequest[]): Promise<any>;
}

@Injectable()
export class InsertStudentRoadMap implements IInsertStudentRoadMap {
  constructor(private readonly roadMapRepository: PostgressRoadMapRepository,private readonly getClassByFilterService : GetClassByFiltersService) {}

  async handle(
    userEmail: string,
    studentRoadMaps: RoadMapRequest[]
  ): Promise<any> {
    try {
      for(let studentRoadMap of studentRoadMaps) {
        let classFound = await this.getClassByFilterService.handle(new ThemeId(studentRoadMap.themeId), new StudyMethodId(studentRoadMap.studyMethodId));
        await this.roadMapRepository.insertRoadMapByStudent(new RoadMapEmail(userEmail),new ClassId(classFound.id),new RoadMapOrder(studentRoadMap.order));
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
