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

export interface OptionResponse {
    id: string;
    text: string;
    isAnswer: boolean;
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
}
