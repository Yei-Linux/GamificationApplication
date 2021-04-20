import React from 'react';

import Input from '../../designSystem/atoms/Input';
import {
  EBorderType,
  EHeightType,
  EInputType,
  EShadowType,
  ETextFieldType,
  EWithType,
} from '../../core/domain/enums';
import { ItemSelect } from '../../core/domain/interfaces';
import { mapEnum } from '../../core/helpers/data-managment.helper';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    borderColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    widthType: { control: { type: 'select', options: mapEnum(EWithType) } },
    shadowType: { control: { type: 'select', options: mapEnum(EShadowType) } },
    borderType: { control: { type: 'select', options: mapEnum(EBorderType) } },
    heigthType: { control: { type: 'select', options: mapEnum(EHeightType) } },
    inputType: { control: { type: 'select', options: mapEnum(EInputType) } },
    textFieldType: {
      control: { type: 'select', options: mapEnum(ETextFieldType) },
    },
    hasPadding: { control: 'boolean' },
  },
};

export const TextFieldInput = (args: any) => <Input {...args} />;

TextFieldInput.args = {
  placeholder: 'Escribe tus nombres',
  inputType: EInputType.TEXTFIELD,
  borderType: EBorderType.ROUNDED,
  hasPadding: true,
  borderColor: 'gainsboro',
  textFieldType: ETextFieldType.TEXT,
};

TextFieldInput.storyName = 'Text Field Input';

const items: ItemSelect[] = [
  {
    key: '1',
    value: 'Data Science',
  },
  {
    key: '2',
    value: 'Frontend Developer',
  },
];

export const SelectFieldInput = (args: any) => <Input {...args} />;

SelectFieldInput.args = {
  placeholder: 'Selecciona una Opcion',
  inputType: EInputType.SELECT,
  borderType: EBorderType.ROUNDED,
  hasPadding: true,
  borderColor: 'gainsboro',
  textFieldType: ETextFieldType.TEXT,
  selectItems: items,
};

SelectFieldInput.storyName = 'Select Field Input';
