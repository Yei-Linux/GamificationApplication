import { QuestionsExamModel } from '../../../../../../shared/infraestructure/sequelize/QuestionsExamModel';
import { LevelMapper } from '../../../../../Level/Infraestructure/sequelize/mapper/LevelMapper';
import { QuestionMapper } from '../../../../../Question/Infraestructure/sequelize/mapper/QuestionMapper';
import { QuestionModel } from '../../../../../Question/Infraestructure/sequelize/QuestionModel';
import { ThemeMapper } from '../../../../../Theme/Infraestructure/sequelize/mapper/ThemeMapper';
import { GetExamResponse } from '../../../../Application/GetExam/GetExamResponse';
import { Exam } from '../../../../Domain/Exam';
import ExamDescription from '../../../../Domain/ExamDescription';
import ExamDuration from '../../../../Domain/ExamDuration';
import ExamId from '../../../../Domain/ExamId';
import ExamName from '../../../../Domain/ExamName';
import ExamOrder from '../../../../Domain/ExamOrder';
import ExamTypeId from '../../../../Domain/ExamTypeId';
import { ExamModel } from '../ExamModel';

export class ExamMapper {
  static convertExamModelToExam(examModel: ExamModel): Exam {
      let questionsModel : QuestionModel[] = examModel.questionsByExam.map((questionByExam : QuestionsExamModel) => {
        return questionByExam.questions;
      })
    return Exam.create(
      new ExamId(examModel.id),
      new ExamName(examModel.name),
      new ExamDescription(examModel.description),
      new ExamDuration(examModel.duration),
      new ExamOrder(examModel.order),
      new ExamTypeId(examModel.examTypeId),
      LevelMapper.convertLevelModelToLevel(examModel.level),
      ThemeMapper.convertThemeModelToTheme(examModel.theme),
      QuestionMapper.convertQuestionsModelToQuestions(questionsModel)
    );
  }
  static convertExamToGetExamResponse(exam: Exam): GetExamResponse {
        return {
            id: exam._id._value,
            name: exam._name._value,
            description: exam._description._value,
            duration: exam._duration._value,
            order: exam._order._value,
            examTypeId: exam._examTypeId._value,
            level: LevelMapper.convertLevelToLevelResponse(exam._level),
            theme: ThemeMapper.convertThemeToThemeResponse(exam._theme),
            questions: QuestionMapper.convertQuestionsToQuestionsResponse(exam._questions)
        }
    }
}