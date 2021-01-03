import React from 'react';
import Icon from '../../atomic/atoms/Icon';
import {
  EBorderType,
  EHeightType,
  EShadowType,
  EWithType,
} from '../../core/domain/enums';

import IconLogo from '../assets/hatIcon.svg';
import FoodLogo from '../assets/foodIcon.svg';
import IceCreamLogo from '../assets/iceCreamIcon.svg';
import MainLogo from '../assets/logoMain.svg';
import { mapEnum } from '../../core/helpers/data-managment.helper';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    borderColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    widthType: { control: { type: 'select', options: mapEnum(EWithType) } },
    shadowType: { control: { type: 'select', options: mapEnum(EShadowType) } },
    borderType: { control: { type: 'select', options: mapEnum(EBorderType) } },
    heigthType: { control: { type: 'select', options: mapEnum(EHeightType) } },
  },
};

export const RoundIcon = (args) => (
  <Icon {...args}>
    <img
      style={{ height: '30px', width: '30px' }}
      src={IconLogo}
      alt="roundLogo"
    />
  </Icon>
);

RoundIcon.args = {
  borderColor: '#00dfff',
  backgroundColor: '#00dfff',
  shadowType: EShadowType.MEDIUM,
  borderType: EBorderType.CIRCLE,
  hasPadding: true,
};

RoundIcon.storyName = 'Round Icon';

export const MainIcon = (args) => (
  <Icon {...args}>
    <img style={{ width: '150px' }} src={MainLogo} alt="squareLogo" />
  </Icon>
);

MainIcon.args = {
  borderColor: '#00dfff',
  backgroundColor: '#fafafa',
  shadowType: EShadowType.MEDIUM,
  borderType: EBorderType.NORMAL,
  hasPadding: true,
};

MainIcon.storyName = 'Main Icon';

export const SquareIcon = (args) => (
  <Icon {...args}>
    <img
      style={{ height: '30px', width: '30px' }}
      src={IceCreamLogo}
      alt="squareLogo"
    />
  </Icon>
);

SquareIcon.args = {
  borderColor: 'black',
  backgroundColor: '#e4e978',
  shadowType: EShadowType.MEDIUM,
  borderType: EBorderType.ROUNDED,
  widthType: EWithType.NORMAL,
  hasPadding: true,
};

SquareIcon.storyName = 'Square Icon';

export const TransparentIcon = (args) => (
  <Icon {...args}>
    <img
      style={{ height: '30px', width: '30px' }}
      src={FoodLogo}
      alt="transparentLogo"
    />
  </Icon>
);

TransparentIcon.args = {
  borderColor: '#00dfff',
  backgroundColor: 'transparent',
  shadowType: EShadowType.MEDIUM,
  borderType: EBorderType.ROUNDED,
  widthType: EWithType.NORMAL,
  hasPadding: true,
};

TransparentIcon.storyName = 'Transparent Icon';
