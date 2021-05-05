import { Meta } from "@storybook/react";
import { stylesControl } from "../../../core/helpers/storybook";

import Form from ".";
import React from "react";
import Input from "../../atoms/Input";
import Password from "../../atoms/Password";
import Number from "../../atoms/Number";
import TextArea from "../../atoms/TextArea";
import Switch from "../../atoms/Switch";

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
    <Form.Item label="Contraseña" name="password">
      <Password placeholder="Ingresa tu contraseña" />
    </Form.Item>
    <Form.Item label="Celular" name="phone">
      <Number placeholder="Ingresa tu celular" />
    </Form.Item>
    <Form.Item label="Comentario" name="comment">
      <TextArea placeholder="Ingresa tu comentario" />
    </Form.Item>
    <Form.Item label="Activar Notificaciones" name="isActive">
      <Switch defaultChecked={false} />
    </Form.Item>
  </Form>
);

Basic.args = {};
