import React from 'react';

import Label from '../../designSystem/atoms/Label';
import {
  EBorderType,
  EHeightType,
  EShadowType,
  EWithType,
  ETextAlign,
  EFontWeight,
} from '../../core/domain/enums';

import { mapEnum } from '../../core/helpers/data-managment.helper';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    isLink: { control: 'boolean' },
    hasPadding: { control: 'boolean' },
    link: { control: 'text' },
    children: { control: 'text' },
    borderColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    widthType: { control: { type: 'select', options: mapEnum(EWithType) } },
    textAlign: { control: { type: 'select', options: mapEnum(ETextAlign) } },
    fontWeight: { control: { type: 'select', options: mapEnum(EFontWeight) } },
    shadowType: { control: { type: 'select', options: mapEnum(EShadowType) } },
    borderType: { control: { type: 'select', options: mapEnum(EBorderType) } },
    heigthType: { control: { type: 'select', options: mapEnum(EHeightType) } },
  },
};

export const SimpleLabel = (args : any) => <Label {...args} />;

SimpleLabel.args = {
  children: 'Elige un lenguaje de programación',
  borderColor: 'transparet',
  backgroundColor: 'transparent',
  hasPadding: true,
  isLink: false,
};

SimpleLabel.storyName = 'Simple Label';

export const LinkLabel = (args : any) => <Label {...args} />;

LinkLabel.args = {
  children: 'Olvidé mi contraseña',
  borderColor: 'transparet',
  backgroundColor: 'white',
  hasPadding: true,
  isLink: true,
  link: '/change-password',
  shadowType: EShadowType.MEDIUM,
};

LinkLabel.storyName = 'Link Label';
