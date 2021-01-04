import { QuestionModel } from "../sequelize/QuestionModel";
import { QuestionTypeModel } from "../sequelize/QuestionTypeModel";

export const QuestionProvider = [
  {
    provide: 'QuestionTypeModel',
    useValue: QuestionTypeModel,
  },
  {
    provide: 'QuestionModel',
    useValue: QuestionModel,
  },
];