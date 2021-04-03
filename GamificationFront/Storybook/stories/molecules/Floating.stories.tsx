import { Meta } from "@storybook/react";
import React from "react";
import Floating from "../../atomic/molecules/Floating";
import GuideMessage from "../../atomic/molecules/GuideMessage";

export default {
  title: "Molecules/Floating",
  component: Floating,
  argTypes: {},
} as Meta;

export const FloatingRightBasic = (args: any) => (
  <Floating {...args}>
    <GuideMessage
      guideType="chill"
      message="Toma un descanso!"
      direction="right"
      background="#ff75a0"
    />
  </Floating>
);

FloatingRightBasic.args = {
  direction: "right",
};

FloatingRightBasic.storyName = "Basic Floating Right";

export const FloatingLeftBasic = (args: any) => (
  <Floating {...args}>
    <GuideMessage
      guideType="chill"
      message="Toma un descanso!"
      direction="right"
      background="#ff75a0"
    />
  </Floating>
);

FloatingLeftBasic.args = {
  direction: "left",
};

FloatingLeftBasic.storyName = "Basic Floating Left";

export const FloatingTopBasic = (args: any) => (
  <Floating {...args}>
    <GuideMessage
      guideType="chill"
      message="Toma un descanso!"
      direction="right"
      background="#ff75a0"
    />
  </Floating>
);

FloatingTopBasic.args = {
  direction: "top",
};

FloatingTopBasic.storyName = "Basic Floating Top";

export const FloatingBottomBasic = (args: any) => (
  <Floating {...args}>
    <GuideMessage
      guideType="chill"
      message="Toma un descanso!"
      direction="right"
      background="#ff75a0"
    />
  </Floating>
);

FloatingBottomBasic.args = {
  direction: "bottom",
};

FloatingBottomBasic.storyName = "Basic Floating Bottom";
