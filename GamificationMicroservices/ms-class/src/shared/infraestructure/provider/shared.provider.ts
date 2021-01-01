import { ThemeStudyMethodsModel } from "../sequelize/ThemeStudyMethodsModel";

export const SharedProvider = [
  {
    provide: 'ThemeStudyMethodsModel',
    useValue: ThemeStudyMethodsModel,
  },
];