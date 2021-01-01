import { Injectable } from '@nestjs/common';
import CourseId from '../../../Course/Domain/CourseId';
import RoadMapEmail from '../../Domain/RoadMapEmail';
import { PostgressRoadMapRepository } from '../../Infraestructure/Persistence/PostgressRoadMapRepository';

interface IGetRoadMapService {
  handle(userEmail: RoadMapEmail, courseId: CourseId): Promise<any>;
}

@Injectable()
export class GetRoadMapService implements IGetRoadMapService {
  constructor(private readonly roadMapRepository: PostgressRoadMapRepository) {}

  async handle(
    userEmail: RoadMapEmail,
    courseId: CourseId
  ): Promise<any> {
    let roadMapFound : any[] = await this.roadMapRepository.getRoadMapByStudent(userEmail,courseId);
    return roadMapFound;
  }
}
