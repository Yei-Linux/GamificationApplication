import { StudentAnswerModel } from "../sequelize/StudentAnswerModel";

export const StudentAnswerProvider = [
  {
    provide: 'StudentAnswerModel',
    useValue: StudentAnswerModel,
  },
];