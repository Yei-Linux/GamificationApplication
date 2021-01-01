import { Injectable, Inject, Logger } from '@nestjs/common';
import ClassId from '../../../Class/Domain/ClassId';
import { ThemeStudyMethodsModel } from '../../../Class/Infraestructure/Persistence/sequelize/ThemeStudyMethodsModel';
import CourseId from '../../../Course/Domain/CourseId';
import { CourseModel } from '../../../Course/Infraestructure/sequelize/CourseModel';
import { ThemeModel } from '../../../Theme/Infraestructure/sequelize/ThemeModel';
import RoadMapEmail from '../../Domain/RoadMapEmail';
import RoadMapOrder from '../../Domain/RoadMapOrder';
import { RoadMapRepository } from '../../Domain/RoadMapRepository';
import { StudentRoadMapModel } from './sequelize/StudentRoadMapModel';

@Injectable()
export class PostgressRoadMapRepository implements RoadMapRepository {
  constructor(
    @Inject('StudentRoadMapModel')
    private readonly studentRoadMapModel: typeof StudentRoadMapModel,
  ) {}

  async insertRoadMapByStudent(
    userEmail: RoadMapEmail,
    classId: ClassId,
    order: RoadMapOrder,
  ): Promise<any> {
      try {
          await StudentRoadMapModel.create({
            userEmail: userEmail._value,
            themeStudyMehodsId: classId._value,
            order: order._value,
            wasView: false,
          });
      } catch (error) {
        throw new Error('Error to insert roadMapStudent');
      }
  }

  async getRoadMapByStudent(
    userEmail: RoadMapEmail,
    courseId: CourseId,
  ): Promise<any> {
    let studentRoadMapFound: StudentRoadMapModel[] = await StudentRoadMapModel.findAll(
      {
        where: { userEmail: userEmail._value },
        include: [
          {
            model: ThemeStudyMethodsModel,
            as: 'themeStudyMethod',
            include: [
              {
                model: ThemeModel,
                as: 'theme',
                where: { courseId: courseId._value },
              },
            ],
          },
        ],
      },
    );
    Logger.log(`RoadMap of student with email ${userEmail._value} has: ${JSON.stringify(studentRoadMapFound)}`);
    return studentRoadMapFound;
  }
}
