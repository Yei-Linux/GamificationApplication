import { StudentAnswerModel } from "../sequelize/StudentAnswerModel";

export const StudentAnswerProvider = [
  {
    provide: '',
    useValue: StudentAnswerModel,
  },
];