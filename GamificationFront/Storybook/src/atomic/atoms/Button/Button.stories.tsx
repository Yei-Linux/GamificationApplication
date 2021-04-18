import { Meta } from "@storybook/react";
import { getListTemplate, getTemplate, stylesControl } from "../../../core/helpers/storybook";

import Button from ".";
import { options as optionsButton } from "./constants";

const Template = getTemplate(Button);
const ListTemplate = getListTemplate(Button);

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    type: { control: { type: "select", options: optionsButton.type } },
    ...stylesControl
  },
} as Meta;

export const TypesButton = ListTemplate.bind({});
TypesButton.args = {
  items: optionsButton.type.map((type) => ({ type })),
  children: "Types Button",
  width: "NORMAL",
  heigth: "SMALL",
  shadow: "XLARGE",
  border: "PILLSHAPE",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: "Small Button",
  width: "NORMAL",
  heigth: "SMALL",
  shadow: "XLARGE",
  border: "PILLSHAPE",
};
SmallButton.storyName = "Small Button";

export const NormalButton = Template.bind({});
NormalButton.args = {
  children: "Normal Button",
  width: "NORMAL",
  heigth: "SMALL",
  shadow: "XLARGE",
  border: "PILLSHAPE",
};
NormalButton.storyName = "Normal Button";

export const MediumButton = Template.bind({});
MediumButton.args = {
  children: "Medium Button",
  width: "MEDIUM",
  heigth: "SMALL",
  shadow: "XLARGE",
  border: "PILLSHAPE",
};
MediumButton.storyName = "Medium Button";

export const LargeButton = Template.bind({});
LargeButton.args = {
  children: "Large Button",
  width: "LARGE",
  heigth: "SMALL",
  shadow: "XLARGE",
  border: "PILLSHAPE",
};
LargeButton.storyName = "Large Button";
