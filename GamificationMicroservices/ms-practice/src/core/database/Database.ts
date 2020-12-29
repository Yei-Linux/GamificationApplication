import { Sequelize } from 'sequelize-typescript';
import { applicationSettings } from 'src/config/application';
import { database } from 'src/config/database';
import { ExamModel } from 'src/modules/Exam/Infraestructure/sequelize/ExamModel';
import { ExamTypeModel } from 'src/modules/Exam/Infraestructure/sequelize/ExamTypeModel';
import { LevelModel } from 'src/modules/Level/Infraestructure/sequelize/LevelModel';
import { OptionModel } from 'src/modules/Option/Infraestructure/sequelize/OptionModel';
import { QuestionModel } from 'src/modules/Question/Infraestructure/sequelize/QuestionModel';
import { QuestionTypeModel } from 'src/modules/Question/Infraestructure/sequelize/QuestionTypeModel';
import { StudentAnswerModel } from 'src/modules/StudentAnswer/Infraestructure/sequelize/StudentAnswerModel';
import { ThemeModel } from 'src/modules/Theme/Infraestructure/sequelize/ThemeEntity';
import { QuestionsExamModel } from 'src/shared/infraestructure/sequelize/QuestionsExamModel';

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
        StudentAnswerModel,
      ]);

      await sequelize.sync({ force: true })
      return sequelize;
    },
  },
];
