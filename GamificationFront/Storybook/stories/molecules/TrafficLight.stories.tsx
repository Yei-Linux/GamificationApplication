import { Meta } from "@storybook/react";
import React from "react";
import TrafficLight from "../../atomic/molecules/TrafficLight";

export default {
  title: "Molecules/TrafficLight",
  component: TrafficLight,
  argTypes: {},
} as Meta;

export const TrafficLightBasic = (args: any) => <TrafficLight {...args} />;

TrafficLightBasic.args = {};

TrafficLightBasic.storyName = "Basic TrafficLight";
