export interface GetExamRequest {
    themeId: string;
    examTypeId: string;
    levelId: string;
    specializationId?: string;
}

export interface AnswersRequest {
    studentAnswerText: string;
    duration: number;
    questionExamId: string;
    optionId: string;
}

export interface PostStudentAnswersOfExamRequest {
    userEmail: string;
    retry: number;
    answers: AnswersRequest[];
}

export interface LevelResponse {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

export interface ThemeResponse {
    id: string;
    name: string;
    description: string;
}

export interface QuestionResponse {
    id: string;
    text: string;
    description: string;
    duration: number;
    points: number;
    difficulty: number;
    questionTypeId: string;
    questionTypeName: string;
    options: OptionResponse[];
    examQuestionId: string;
    theme?: ThemeResponse;
}

export interface OptionResponse {
    id: string;
    text: string;
    isAnswer: boolean;
}

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