import { ExamModel } from "../sequelize/ExamModel";
import { ExamTypeModel } from "../sequelize/ExamTypeModel";

export const ExamProvider = [
  {
    provide: 'ExamModel',
    useValue: ExamModel,
  },
  {
    provide: 'ExamTypeModel',
    useValue: ExamTypeModel,
  },
];