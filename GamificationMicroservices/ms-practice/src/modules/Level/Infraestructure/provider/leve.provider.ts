import { LevelModel } from "../sequelize/LevelModel";

export const LevelProvider = [
  {
    provide: '',
    useValue: LevelModel,
  },
];