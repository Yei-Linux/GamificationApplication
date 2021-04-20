import { Meta } from "@storybook/react";
import React from "react";
import Message from "../../designSystem/atoms/Message";

export default {
  title: "Atoms/Message",
  component: Message,
  argTypes: {},
} as Meta;

export const LeftMessageBasic = (args: any) => <Message {...args} />;

LeftMessageBasic.args = {
    direction: 'left'
};

LeftMessageBasic.storyName = "Mensaje Izquierda basico";

export const RightMessageBasic = (args: any) => <Message {...args} />;

RightMessageBasic.args = {
    direction: 'right'
};

RightMessageBasic.storyName = "Mensaje Derecha basico";
