import { GetExamRequest, PostStudentAnswersOfExamRequest } from "../../endpoints/Exams/ExamRequest";
import { AnswersRequest } from "../../shared/application/request";

export class RequestsFaker {
    public static generateGetExamByThemeAndType(themeId : string, examTypeId : string,levelId: string) : GetExamRequest {
        return {
            themeId: themeId,
            examTypeId: examTypeId,
            levelId: levelId
        }
    }

    public static generateInsertStudentAnswers(studentAnswerText: string, duration: number, questionExamId: string, optionId: string) : AnswersRequest{
        return {
            studentAnswerText: studentAnswerText,
            duration: duration,
            questionExamId: questionExamId,
            optionId: optionId,
        }
    }

    public static generateInsertStudentExam(userEmail : string, retry : number,answers: AnswersRequest[]) : PostStudentAnswersOfExamRequest {
        return {
            userEmail: userEmail,
            retry: retry,
            answers: answers
        }
    }
}