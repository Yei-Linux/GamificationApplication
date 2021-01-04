import { PostStudentAnswersOfExamRequest } from '../../../../../endpoints/Exams/ExamRequest';
import { AnswersRequest } from '../../../../../shared/application/request';
import ExamQuestionId from '../../../../Exam/Domain/ExamQuestionId';
import OptionId from '../../../../Option/Domain/OptionId';
import { StudentAnswer } from '../../../Domain/StudentAnswer';
import StudentAnswerDuration from '../../../Domain/StudentAnswerDuration';
import StudentAnswerId from '../../../Domain/StudentAnswerId';
import StudentAnswerText from '../../../Domain/StudentAnswerText';
import { StudentExam } from '../../../Domain/StudentExam';
import StudentExamEmail from '../../../Domain/StudentExamEmail';
import StudentExamId from '../../../Domain/StudentExamId';
import StudentExamRetry from '../../../Domain/StudentExamRetry';
import { StudentExamModel } from '../StudentExamModel';

export class StudentAnswersByExamMapper {
  static convertPostStudentAnswersOfExamToStudentExam(
    postStudentAnswersByExam: PostStudentAnswersOfExamRequest,
  ): StudentExam {
    return StudentExam.create(
      null,
      new StudentExamEmail(postStudentAnswersByExam.userEmail),
      new StudentExamRetry(postStudentAnswersByExam.retry),
      StudentAnswersByExamMapper.convertPostStudentAnswersToStudentAnswers(postStudentAnswersByExam.answers)
    );
  }

  static convertStudentExamModelToStudentExam(
    studentExamModel: StudentExamModel,
  ): StudentExam {
    return StudentExam.create(
      new StudentExamId(studentExamModel.id),
      new StudentExamEmail(studentExamModel.userEmail),
      new StudentExamRetry(studentExamModel.retry),
      null
    );
  }

  static convertPostStudentAnswerToStudentAnswer(
    answerRequest: AnswersRequest,
  ): StudentAnswer {
    return StudentAnswer.create(
        null,
        new StudentAnswerText(answerRequest.studentAnswerText),
        new StudentAnswerDuration(answerRequest.duration),
        new ExamQuestionId(answerRequest.questionExamId),
        new OptionId(answerRequest.optionId),
        null
    );
  }

  static convertPostStudentAnswersToStudentAnswers(
    answersRequest: AnswersRequest[],
  ): StudentAnswer[] {
    return answersRequest.map((answer : AnswersRequest) => {
        return StudentAnswersByExamMapper.convertPostStudentAnswerToStudentAnswer(answer);
    })
  }
}
