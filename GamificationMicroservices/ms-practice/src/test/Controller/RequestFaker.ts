import { GetExamRequest } from "../../endpoints/Exams/ExamRequest";

export class RequestsFaker {
    public static generateGetExamByThemeAndType(themeId : string, examTypeId : string,levelId: string) : GetExamRequest {
        return {
            themeId: themeId,
            examTypeId: examTypeId,
            levelId: levelId
        }
    }
}