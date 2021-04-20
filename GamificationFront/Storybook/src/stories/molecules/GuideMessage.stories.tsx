import { Meta } from "@storybook/react";
import React from "react";
import GuideMessage from "../../designSystem/molecules/GuideMessage";

export default {
  title: "Molecules/GuideMessage",
  component: GuideMessage,
  argTypes: {},
} as Meta;

export const GuideMessageLeftBasic = (args: any) => <GuideMessage {...args} />;

GuideMessageLeftBasic.args = {
  guideType: "box",
  message: "Hola como estas",
  direction: "left",
  background: "#ffab73",
};

GuideMessageLeftBasic.storyName = "Guia animada con mensaje(izquierda)";

export const GuideMessageRightBasic = (args: any) => <GuideMessage {...args} />;

GuideMessageRightBasic.args = {
  guideType: "chill",
  message: "Toma un descanso!",
  direction: "right",
  background: "#ff75a0",
};

GuideMessageRightBasic.storyName = "Guia animada con mensaje(derecha)";
