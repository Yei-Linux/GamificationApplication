import { Injectable } from '@nestjs/common';
import { RoadMapRequest } from '../../../../endpoints/RoadMap/RoadMapRequest';
import { GetClassByFiltersService } from '../../../Class/Application/GetClassByFilters';
import ClassId from '../../../Class/Domain/ClassId';
import CourseId from '../../../Course/Domain/CourseId';
import StudyMethodId from '../../../StudyMethods/Domain/StudyMethodId';
import ThemeId from '../../../Theme/Domain/ThemeId';
import RoadMapEmail from '../../Domain/RoadMapEmail';
import RoadMapOrder from '../../Domain/RoadMapOrder';
import { PostgressRoadMapRepository } from '../../Infraestructure/Persistence/PostgressRoadMapRepository';

interface IInsertStudentRoadMap {
  handle(userEmail: RoadMapEmail, studentRoadMap: RoadMapRequest[]): Promise<any>;
}

@Injectable()
export class InsertStudentRoadMap implements IInsertStudentRoadMap {
  constructor(private readonly roadMapRepository: PostgressRoadMapRepository,private readonly getClassByFilterService : GetClassByFiltersService) {}

  async handle(
    userEmail: RoadMapEmail,
    studentRoadMaps: RoadMapRequest[]
  ): Promise<any> {
    for(let studentRoadMap of studentRoadMaps) {
        let classFound = await this.getClassByFilterService.handle(new ThemeId(studentRoadMap.themeId), new StudyMethodId(studentRoadMap.studyMethodId));
        await this.roadMapRepository.insertRoadMapByStudent(userEmail,classFound.id,new RoadMapOrder(studentRoadMap.order));
    }
  }
}
