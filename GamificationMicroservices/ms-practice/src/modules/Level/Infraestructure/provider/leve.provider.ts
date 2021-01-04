import { LevelModel } from "../sequelize/LevelModel";

export const LevelProvider = [
  {
    provide: 'LevelModel',
    useValue: LevelModel,
  },
];