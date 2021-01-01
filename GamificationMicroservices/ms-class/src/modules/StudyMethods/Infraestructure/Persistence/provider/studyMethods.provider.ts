import { StudyMethodsModel } from "../sequelize/StudyMethodsModel";

export const StudyMethodsProvider = [
  {
    provide: 'StudyMethodsModel',
    useValue: StudyMethodsModel,
  },
];