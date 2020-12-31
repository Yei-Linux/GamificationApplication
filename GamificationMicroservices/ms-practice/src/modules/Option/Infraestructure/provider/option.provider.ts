import { OptionModel } from "../sequelize/OptionModel";

export const OptionProvider = [
  {
    provide: 'OptionModel',
    useValue: OptionModel,
  },
];