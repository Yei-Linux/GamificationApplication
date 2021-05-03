import { Meta } from "@storybook/react";
import { stylesControl } from "../../../core/helpers/storybook";

import Form from ".";
import React from "react";
import Input from "../../atoms/Input";
import Password from "../../atoms/Password";

export default {
  title: "Molecules/Form",
  component: Form,
  args: { ...Form.defaultProps },
  argTypes: {
    ...stylesControl,
  },
} as Meta;

export const Basic = (args: any) => (
  <Form {...args}>
    <Form.Item label="Nombres" name="names">
      <Input placeholder="Ingresa tus nombres" />
    </Form.Item>
  </Form>
);

Basic.args = {};
