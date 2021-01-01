import { Sequelize } from 'sequelize-typescript';
import { applicationSettings } from '../../config/application';
import { database } from '../../config/database';
import { CourseModel } from '../../modules/Course/Infraestructure/sequelize/CourseModel';
import { StudentRoadMapModel } from '../../modules/StudentRoadMap/Infraestructure/Persistence/sequelize/StudentRoadMapModel';
import { StudyMethodsModel } from '../../modules/StudyMethods/Infraestructure/Persistence/sequelize/StudyMethodsModel';
import { ThemeModel } from '../../modules/Theme/Infraestructure/sequelize/ThemeModel';
import { ThemeStudyMethodsModel } from '../../shared/infraestructure/sequelize/ThemeStudyMethodsModel';
export const databaseProviders = [
  {
    provide: 'sequelize',
    useFactory: async () => {
      const sequelize = new Sequelize(
        database[applicationSettings['environment']],
      );

      sequelize.addModels([
        CourseModel,
        ThemeModel,
        StudyMethodsModel,
        ThemeStudyMethodsModel,
        StudentRoadMapModel
      ]);

      await sequelize.sync()
      return sequelize;
    },
  },
];
