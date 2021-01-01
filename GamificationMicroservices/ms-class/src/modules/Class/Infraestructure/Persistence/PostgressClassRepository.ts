import { Injectable, Inject, Logger } from '@nestjs/common';
import StudyMethodId from '../../../StudyMethods/Domain/StudyMethodId';
import ThemeId from '../../../Theme/Domain/ThemeId';
import { ThemeModel } from '../../../Theme/Infraestructure/sequelize/ThemeModel';
import ClassId from '../../Domain/ClassId';
import { ClassRepository } from '../../Domain/ClassRepository';
import { ThemeStudyMethodsModel } from './sequelize/ThemeStudyMethodsModel';

@Injectable()
export class PostgressClassRepository implements ClassRepository {
  constructor(
    @Inject('ThemeStudyMethodsModel')
    private readonly themeStudyMethod: typeof ThemeStudyMethodsModel,
  ) {}

  async getClassByFilters(
    themeId: ThemeId,
    studyMethodId: StudyMethodId,
  ): Promise<any> {
    let classFound: ThemeStudyMethodsModel = await ThemeStudyMethodsModel.findOne(
        {
          where: { themeId: themeId._value, studyMethodId: studyMethodId._value},
          include: [
            {
              model: ThemeModel,
              as: 'theme',
            },
          ],
        },
      );
      return classFound;
  }

  async getClassById(classId: ClassId): Promise<any> {
    let classFound: ThemeStudyMethodsModel = await ThemeStudyMethodsModel.findOne(
      {
        where: { id: classId._value },
        include: [
          {
            model: ThemeModel,
            as: 'theme',
          },
        ],
      },
    );
    return classFound;
  }
}
