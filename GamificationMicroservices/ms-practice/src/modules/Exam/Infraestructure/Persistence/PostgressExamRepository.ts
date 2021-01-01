import { Inject, Injectable, Logger } from '@nestjs/common';
import { QuestionsExamModel } from '../../../../shared/infraestructure/sequelize/QuestionsExamModel';
import LevelId from '../../../Level/Domain/LevelId';
import { LevelModel } from '../../../Level/Infraestructure/sequelize/LevelModel';
import { OptionModel } from '../../../Option/Infraestructure/sequelize/OptionModel';
import { QuestionModel } from '../../../Question/Infraestructure/sequelize/QuestionModel';
import { QuestionTypeModel } from '../../../Question/Infraestructure/sequelize/QuestionTypeModel';
import ThemeId from '../../../Theme/Domain/ThemeId';
import { ThemeModel } from '../../../Theme/Infraestructure/sequelize/ThemeModel';
import { Exam } from '../../Domain/Exam';
import { ExamRepository } from '../../Domain/ExamRepository';
import ExamTypeId from '../../Domain/ExamTypeId';
import { ExamModel } from './sequelize/ExamModel';
import { ExamTypeModel } from './sequelize/ExamTypeModel';
import { ExamMapper } from './sequelize/mapper/ExamMapper';

@Injectable()
export class PostgressExamRepository implements ExamRepository {
  constructor(
    @Inject('ExamModel') private readonly examModel: typeof ExamModel,
  ) {}

  async getExamByTheme(themeId: ThemeId, examTypeId: ExamTypeId, levelId: LevelId): Promise<Exam> {
    let examFound: ExamModel = await this.examModel.findOne({
      where: { theme_id: themeId._value , exam_type_id: examTypeId._value, level_id: levelId._value},
      include: [{
        model: LevelModel
      },{
        model: ThemeModel
      },{
        model: ExamTypeModel
      },{
        model: QuestionsExamModel,
        as: "questionsByExam",
        include: [{
          model: QuestionModel,
          as: "questions",
          include: [{
            model: QuestionTypeModel,
          },{
            model: QuestionsExamModel,
            as: "questions",
          },
          {
            model: OptionModel,
            as: "options"
          }]
        }]
      }]
    });

    Logger.log(`Exam found: ${JSON.stringify(examFound)}`);
    return ExamMapper.convertExamModelToExam(examFound);
  }
}
