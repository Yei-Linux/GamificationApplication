import { AnswersRequest } from '../../shared/application/request';

export interface GetExamRequest {
  themeId: string;
  examTypeId: string;
  levelId: string;
  specializationId?: string;
}

export interface PostStudentAnswersOfExamRequest {
  userEmail: string;
  retry: number;
  answers: AnswersRequest[];
}

export interface GetExerciseCode {
  code: string;
  language: string;
}