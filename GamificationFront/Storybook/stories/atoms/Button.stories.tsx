import { Meta } from "@storybook/react";
import React from "react";
import Button from "../../atomic/atoms/Button";
import { EBorderType, EHeightType, EShadowType, EWithType } from "../../core/domain/enums";
import { mapEnum } from "../../core/helpers/data-managment.helper";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: { control: 'text' },
    borderColor: { control: 'color' },
    backgroundColor: { control: 'color'},
    textColor: { control: 'color'},
    hasIcon: {control: 'boolean'},
    widthType: { control: { type: 'select', options: mapEnum(EWithType) }},
    shadowType: { control: { type: 'select', options: mapEnum(EShadowType)}},
    borderType: { control: { type: 'select', options: mapEnum(EBorderType) }},
    heigthType: { control: { type: 'select', options: mapEnum(EHeightType) }},
  },
} as Meta;

export const SmallButton = (args : any) => (
  <Button {...args} />
);

SmallButton.args = {
  children: 'Small Button',
  borderColor: '#822659',
  backgroundColor: "#822659",
  widthType: EWithType.SMALL,
  heigthType: EHeightType.SMALL,
  shadowType: EShadowType.XLARGE,
  borderType: EBorderType.PILLSHAPE
};

SmallButton.storyName = "Small Button";

export const NormalButton = (args : any) => (
  <Button {...args} />
);

NormalButton.args = {
  children: 'Normal Button',
  borderColor: '#f8f7de',
  backgroundColor: "#f8f7de",
  widthType: EWithType.NORMAL,
  heigthType: EHeightType.SMALL,
  shadowType: EShadowType.XLARGE,
  borderType: EBorderType.PILLSHAPE
};

NormalButton.storyName = "Normal Button";

export const MediumButton = (args : any) => (
  <Button {...args} />
);

MediumButton.args = {
  children: 'Medium Button',
  borderColor: '#b088f9',
  backgroundColor: "#b088f9",
  widthType: EWithType.MEDIUM,
  heigthType: EHeightType.SMALL,
  shadowType: EShadowType.XLARGE,
  borderType: EBorderType.PILLSHAPE
};

MediumButton.storyName = "Medium Button";

export const LargeButton = (args : any) => (
  <Button {...args} />
);

LargeButton.args = {
  children: 'Large Button',
  borderColor: '#bedcfa',
  backgroundColor: "#bedcfa",
  widthType: EWithType.LARGE,
  heigthType: EHeightType.SMALL,
  shadowType: EShadowType.XLARGE,
  borderType: EBorderType.PILLSHAPE
};

LargeButton.storyName = "Large Button";