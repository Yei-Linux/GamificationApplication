import { CourseModel } from "../sequelize/CourseModel";

export const CourseProvider = [
  {
    provide: 'CourseModel',
    useValue: CourseModel,
  },
];