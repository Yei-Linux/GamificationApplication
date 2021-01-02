import { ThemeStudyMethodsModel } from '../sequelize/ThemeStudyMethodsModel';

export const ClassProvider = [
  {
    provide: 'ThemeStudyMethodsModel',
    useValue: ThemeStudyMethodsModel,
  },
];
