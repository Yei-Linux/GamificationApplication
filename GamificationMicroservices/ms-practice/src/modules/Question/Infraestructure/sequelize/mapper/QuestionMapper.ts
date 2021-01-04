import { QuestionResponse } from "../../../../../shared/application/response";
import ExamQuestionId from "../../../../Exam/Domain/ExamQuestionId";
import { OptionMapper } from "../../../../Option/Infraestructure/sequelize/mapper/OptionMapper";
import { Question } from "../../../Domain/Question";
import QuestionDescription from "../../../Domain/QuestionDescription";
import QuestionDifficulty from "../../../Domain/QuestionDifficulty";
import QuestionDuration from "../../../Domain/QuestionDuration";
import QuestionId from "../../../Domain/QuestionId";
import QuestionOrder from "../../../Domain/QuestionOrder";
import QuestionPoint from "../../../Domain/QuestionPoint";
import QuestionText from "../../../Domain/QuestionText";
import QuestionTypeId from "../../../Domain/QuestionTypeId";
import QuestionTypeName from "../../../Domain/QuestionTypeName";
import { QuestionModel } from "../QuestionModel";

export class QuestionMapper {
    static convertQuestionModelToQuestion(questionModel: QuestionModel): Question {
      let questionExamId : string = questionModel.questions.length > 0 ? questionModel.questions[0].id : null;
      return Question.create(
        new QuestionId(questionModel.id),
        new QuestionText(questionModel.text),
        new QuestionDescription(questionModel.description),
        new QuestionDuration(questionModel.duration),
        new QuestionPoint(questionModel.points),
        new QuestionTypeId(questionModel.questionTypeId),
        new QuestionTypeName(questionModel.questionType.name),
        new QuestionOrder(questionModel.order),
        new QuestionDifficulty(questionModel.difficulty),
        OptionMapper.convertOptionsModelToOptions(questionModel.options),
        new ExamQuestionId(questionExamId)
      );
    }

    static convertQuestionsModelToQuestions(questionsModel: QuestionModel[]): Question[] {
        return questionsModel.map((questionModel : QuestionModel) => {
            return QuestionMapper.convertQuestionModelToQuestion(questionModel);
        })
      }

    static convertQuestionToQuestionResponse(question: Question): QuestionResponse {
        return {
            id: question._id._value,
            text: question._text._value,
            description: question._description._value,
            duration: question._duration._value,
            points: question._points._value,
            difficulty: question._difficulty._value,
            questionTypeId: question._questionTypeId._value,
            questionTypeName: question._questionTypeName._value,
            options: OptionMapper.convertOptionsToOptionsResponse(question._options),
            examQuestionId: question._questionExamId._value
        }
    }

    static convertQuestionsToQuestionsResponse(questions: Question[]) : QuestionResponse[]{
        return questions.map((question: Question) => {
            return QuestionMapper.convertQuestionToQuestionResponse(question);
        })
    }
  }
