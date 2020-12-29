import { ThemeModel } from "../sequelize/ThemeEntity";

export const ThemeProvider = [
  {
    provide: '',
    useValue: ThemeModel,
  },
];