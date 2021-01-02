import { Injectable } from '@nestjs/common';
import CourseId from '../../../Course/Domain/CourseId';
import { RoadMap } from '../../Domain/RoadMap';
import RoadMapEmail from '../../Domain/RoadMapEmail';
import { PostgressRoadMapRepository } from '../../Infraestructure/Persistence/PostgressRoadMapRepository';
import { RoadmapMapper } from '../../Infraestructure/Persistence/sequelize/mapper/RoadmapMapper';
import { GetRoadMapResponse } from './response';

interface IGetRoadMapService {
  handle(userEmail: string, courseId: string): Promise<GetRoadMapResponse[]>;
}

@Injectable()
export class GetRoadMapService implements IGetRoadMapService {
  constructor(private readonly roadMapRepository: PostgressRoadMapRepository) {}

  async handle(
    userEmail: string,
    courseId: string
  ): Promise<GetRoadMapResponse[]> {
    let roadMapFound : RoadMap[] = await this.roadMapRepository.getRoadMapByStudent(new RoadMapEmail(userEmail), new CourseId(courseId));
    return RoadmapMapper.convertDomainToUseCaseGetRoadMap(roadMapFound);
  }
}
