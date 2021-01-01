import { Sequelize } from 'sequelize-typescript';
import { applicationSettings } from '../../config/application';
import { database } from '../../config/database';
import { ExamModel } from '../../modules/Exam/Infraestructure/Persistence/sequelize/ExamModel';
import { ExamTypeModel } from '../../modules/Exam/Infraestructure/Persistence/sequelize/ExamTypeModel';
import { LevelModel } from '../../modules/Level/Infraestructure/sequelize/LevelModel';
import { OptionModel } from '../../modules/Option/Infraestructure/sequelize/OptionModel';
import { QuestionModel } from '../../modules/Question/Infraestructure/sequelize/QuestionModel';
import { QuestionTypeModel } from '../../modules/Question/Infraestructure/sequelize/QuestionTypeModel';
import { StudentAnswerModel } from '../../modules/StudentExam/Infraestructure/sequelize/StudentAnswerModel';
import { StudentExamModel } from '../../modules/StudentExam/Infraestructure/sequelize/StudentExamModel';
import { ThemeModel } from '../../modules/Theme/Infraestructure/sequelize/ThemeModel';
import { QuestionsExamModel } from '../../shared/infraestructure/sequelize/QuestionsExamModel';
export const databaseProviders = [
  {
    provide: 'sequelize',
    useFactory: async () => {
      const sequelize = new Sequelize(
        database[applicationSettings['environment']],
      );

      sequelize.addModels([
        QuestionTypeModel,
        LevelModel,
        ExamTypeModel,
        ThemeModel,
        ExamModel,
        OptionModel,
        QuestionModel,
        QuestionsExamModel,
        StudentExamModel,
        StudentAnswerModel,
      ]);

      await sequelize.sync()
      return sequelize;
    },
  },
];
