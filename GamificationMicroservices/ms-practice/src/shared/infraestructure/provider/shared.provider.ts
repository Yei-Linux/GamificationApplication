import { QuestionsExamModel } from "../sequelize/QuestionsExamModel";

export const SharedProvider = [
  {
    provide: '',
    useValue: QuestionsExamModel,
  },
];