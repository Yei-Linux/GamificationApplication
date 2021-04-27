import React from "react";
import { Meta } from "@storybook/react";
import { stylesControl } from "../../../core/helpers/storybook";

import Select from ".";

export default {
  title: "Atoms/Select",
  component: Select,
  args: { ...Select.defaultProps },
  argTypes: {
    placeholder: { control: "text" },
    ...stylesControl,
  },
} as Meta;

export const BasicSelect = (args: any) => {
  return (
    <Select {...args}>
      <Select.Option>Option1</Select.Option>
      <Select.Option>Option2</Select.Option>
      <Select.Option>Option3</Select.Option>
    </Select>
  );
};
BasicSelect.args = {
  placeholder: "Type your option",
  width: "NORMAL",
  heigth: "SMALL",
  shadow: "",
  border: "MEDIUM",
};