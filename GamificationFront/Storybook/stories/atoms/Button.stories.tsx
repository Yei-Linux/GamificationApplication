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

export const RoundButton = (args) => (
  <Button {...args} />
);

RoundButton.args = {
  children: 'Primary',
  borderColor: '#a7f4ff',
  backgroundColor: "#a7f4ff",
  widthType: EWithType.MEDIUM,
  shadowType: EShadowType.XLARGE,
  borderType: EBorderType.PILLSHAPE
};

RoundButton.storyName = "Round Button";
