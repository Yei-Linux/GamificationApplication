import { ExamModel } from "../sequelize/ExamModel";
import { ExamTypeModel } from "../sequelize/ExamTypeModel";

export const ExamProvider = [
  {
    provide: '',
    useValue: ExamModel,
  },
  {
    provide: '',
    useValue: ExamTypeModel,
  },
];