import React from "react";
import { options as optionsStyle } from "../utils/constants";

export const getTemplate = (Component: React.ComponentType<any>): any => (
  args: any
) => {
  return <Component {...args} />;
};

export const getListTemplate = (Component: React.ComponentType<any>): any => ({
  items,
  ...args
}: {
  items: any[];
}) =>
  items.map((item, index) => {
    return <Component key={index} {...args} {...item} />;
  });

export const stylesControl = {
  style: { control: "object" },
  textAlign: { control: { type: "select", options: optionsStyle.textAlign } },
  fontWeight: {
    control: { type: "select", options: optionsStyle.fontWeight },
  },
  widthType: { control: { type: "select", options: optionsStyle.width } },
  shadowType: { control: { type: "select", options: optionsStyle.shadow } },
  borderType: { control: { type: "select", options: optionsStyle.border } },
  heigthType: { control: { type: "select", options: optionsStyle.height } },
};
