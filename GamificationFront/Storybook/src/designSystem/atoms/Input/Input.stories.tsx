import { Meta } from "@storybook/react";
import {
  getTemplate,
  stylesControl,
} from "../../../core/helpers/storybook";

import Input from ".";

const Template = getTemplate(Input);

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    ...stylesControl,
  },
} as Meta;

export const BasicInput = Template.bind({});
BasicInput.args = {
  placeholder: "Type your name",
  width: "NORMAL",
  heigth: "SMALL",
  shadow: "",
  border: "MEDIUM",
};