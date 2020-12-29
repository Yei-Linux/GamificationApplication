import { QuestionModel } from "../sequelize/QuestionModel";
import { QuestionTypeModel } from "../sequelize/QuestionTypeModel";

export const QuestionProvider = [
  {
    provide: '',
    useValue: QuestionTypeModel,
  },
  {
    provide: '',
    useValue: QuestionModel,
  },
];