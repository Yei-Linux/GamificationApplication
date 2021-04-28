import React from "react";
import { Meta } from "@storybook/react";
import { stylesControl } from "../../../core/helpers/storybook";

import Radio from ".";

export default {
  title: "Atoms/Radio",
  component: Radio,
  args: { ...Radio.defaultProps },
  argTypes: {
    ...stylesControl,
  },
} as Meta;

export const Basic = (args: any) => {
  return (
    <Radio {...args}>
      <Radio.Item isChecked>A</Radio.Item>
      <Radio.Item>B</Radio.Item>
      <Radio.Item>C</Radio.Item>
    </Radio>
  );
};
Basic.args = {
  width: "NORMAL",
  heigth: "SMALL",
  shadow: "",
  border: "MEDIUM",
};
