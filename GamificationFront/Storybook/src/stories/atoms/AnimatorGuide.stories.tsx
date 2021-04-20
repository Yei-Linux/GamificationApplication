import { Meta } from "@storybook/react";
import React from "react";
import AnimatorGuide from "../../designSystem/atoms/AnimatorGuide";

export default {
  title: "Atoms/AnimatorGuide",
  component: AnimatorGuide,
  argTypes: {},
} as Meta;

export const AnimatorGuideBasic = (args: any) => <AnimatorGuide {...args} />;

AnimatorGuideBasic.args = {};

AnimatorGuideBasic.storyName = "Guia animada";
