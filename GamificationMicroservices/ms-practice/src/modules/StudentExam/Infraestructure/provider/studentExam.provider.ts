import { StudentAnswerModel } from "../sequelize/StudentAnswerModel";
import { StudentExamModel } from "../sequelize/StudentExamModel";

export const StudentExamProvider = [
  {
    provide: 'StudentExamModel',
    useValue: StudentExamModel,
  },
  {
    provide: 'StudentAnswerModel',
    useValue: StudentAnswerModel,
  },
];