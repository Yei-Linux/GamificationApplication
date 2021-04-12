import { Meta } from "@storybook/react";
import React from "react";
import Label from "../../atomic/atoms/Label";
import {
  EFontWeight,
  EShadowType,
  EWithType,
  EHeightType,
  EBorderType,
} from "../../core/domain/enums";
import { mapEnum } from "../../core/helpers/data-managment.helper";
import Card from "../../atomic/molecules/Card";

export default {
  title: "Molecules/Card",
  component: Card,
  argTypes: {
    textItem: { control: "text" },
    subTextItem: { control: "text" },
    widthType: { control: { type: "select", options: mapEnum(EWithType) } },
    shadowType: { control: { type: "select", options: mapEnum(EShadowType) } },
    borderType: { control: { type: "select", options: mapEnum(EBorderType) } },
    heigthType: { control: { type: "select", options: mapEnum(EHeightType) } },
  },
} as Meta;

export const CardCustomTitle = (args: any) => (
  <Card {...args}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "monospace",
      }}
    >
      <Label
        fontWeight={EFontWeight.BOLD}
        textColor={"black"}
        children={`MIS CURSOS`}
        borderColor={"transparent"}
        backgroundColor={"transparent"}
        hasPadding={true}
        isLink={false}
      />
    </div>
  </Card>
);

CardCustomTitle.args = {
  isCustom: true,
  backgroundColor: "white",
  shadowType: EShadowType.MEDIUM,
  borderType: EBorderType.ROUNDED,
  widthType: EWithType.LARGE,
};

CardCustomTitle.storyName = "Card Custom Title";

export const CardCustomProfile = (args: any) => <Card {...args} />;

CardCustomProfile.args = {
  isCustom: false,
  cover: (
    <img
    style={{width: '100px', borderRadius: '2em'}}
      src={
        "https://res.cloudinary.com/teepublic/image/private/s--Y5DOrT6I--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1540143169/production/designs/3360948_0.jpg"
      }
    ></img>
  ),
  title: "Jesus Alvan",
  description: "Estudiante de 10cimo ciclo",
  backgroundColor: "white",
  shadowType: EShadowType.MEDIUM,
  borderType: EBorderType.ROUNDED,
  widthType: EWithType.LARGE,
};

CardCustomProfile.storyName = "Card Custom Profile";
