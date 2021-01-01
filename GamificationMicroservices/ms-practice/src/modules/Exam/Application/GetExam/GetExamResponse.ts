import { LevelResponse, ThemeResponse, QuestionResponse } from "../../../../shared/application/response";

export interface GetExamResponse {
    id: string;
    name: string;
    description: string;
    duration: number;
    order: number;
    examTypeId: string;
    level: LevelResponse;
    theme: ThemeResponse;
    questions: QuestionResponse[];
}