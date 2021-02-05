import React from 'react';
import IceCreamLogo from "../assets/iceCreamIcon.svg";
import ListItem from "../../atomic/molecules/ListItem";

export default {
  title: "Molecules/ListItem",
  component: ListItem,
  argTypes: {
    textItem: { control: "text" },
    subTextItem: { control: "text" },
  },
};

export const ListItemBasic = (args: any) => (
  <ListItem {...args}>
    <img
      style={{ height: "30px", width: "30px" }}
      src={IceCreamLogo}
      alt="roundLogo"
    />
  </ListItem>
);

ListItemBasic.args = {
  textItem: "Programacion Estructurada",
  subTextItem: "Tutor: Ericka Ramirez",
};

ListItemBasic.storyName = "List Item Basic";
