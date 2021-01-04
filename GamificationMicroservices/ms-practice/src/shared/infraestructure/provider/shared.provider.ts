import { QuestionsExamModel } from "../sequelize/QuestionsExamModel";

export const SharedProvider = [
  {
    provide: 'QuestionsExamModel',
    useValue: QuestionsExamModel,
  },
];