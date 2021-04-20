import React from "react";
import FlatItem from "../../designSystem/atoms/FlatItem";

import FoodLogo from '../assets/foodIcon.svg';

export default {
    title: 'Atoms/FlatItem',
    component: FlatItem,
    argTypes: {
        isActive: { control: 'boolean' },
    },
  };

export const FlatImageItem = (args : any) => (
    <FlatItem {...args}>
        <img
        style={{ height: '30px', width: '30px' }}
        src={FoodLogo}
        alt="roundLogo"
        />
    </FlatItem>
  );

  FlatImageItem.args = {};

  FlatImageItem.storyName = 'Flat Image Item';

export const FlatTextItemActive = (args : any) => (
    <FlatItem {...args}>
        <p style={{margin: "0px"}}>👽</p>
        <p style={{margin: "0px",wordBreak: "break-word", width: "80%", textAlign: "center", fontWeight: "bold", color: "#01c5c4", fontFamily: "-webkit-pictograph"}}>Funciones mutables</p>
    </FlatItem>
  );

  FlatTextItemActive.args = {
      isActive: true
  };

  FlatTextItemActive.storyName = 'Flat Text Item Active';

export const FlatTextItemBloqued = (args : any) => (
    <FlatItem {...args}>
        <p style={{margin: "0px"}}>🧠</p>
        <p style={{margin: "0px",wordBreak: "break-word", width: "80%", textAlign: "center", fontWeight: "bold", color: "#01c5c4", fontFamily: "-webkit-pictograph"}}>Funciones inmutables</p>
    </FlatItem>
  );

  FlatTextItemBloqued.args = {
      isActive: false
  };

  FlatTextItemBloqued.storyName = 'Flat Text Item Bloqued';