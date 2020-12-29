import { OptionModel } from "../sequelize/OptionModel";

export const OptionProvider = [
  {
    provide: '',
    useValue: OptionModel,
  },
];