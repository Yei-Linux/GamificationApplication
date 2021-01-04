import { ThemeModel } from "../sequelize/ThemeModel";

export const ThemeProvider = [
  {
    provide: 'ThemeModel',
    useValue: ThemeModel,
  },
];