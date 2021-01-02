import { StudentRoadMapModel } from "../sequelize/StudentRoadMapModel";

export const RoadMapProvider = [
  {
    provide: 'StudentRoadMapModel',
    useValue: StudentRoadMapModel,
  },
];