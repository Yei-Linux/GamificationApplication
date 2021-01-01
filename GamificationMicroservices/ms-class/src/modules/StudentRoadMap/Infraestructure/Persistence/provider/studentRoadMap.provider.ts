import { StudentRoadMapModel } from "../sequelize/StudentRoadMapModel";

export const StudentRoadMapProvider = [
  {
    provide: 'StudentRoadMapModel',
    useValue: StudentRoadMapModel,
  },
];