import React from "react";
import Icon from "../../atomic/atoms/Icon";
import { EBorderType, EHeightType, EShadowType, EWithType } from "../../core/domain/enums";

import IconLogo from "../assets/hatIcon.svg";

export default {
  title: "Atoms/Icon",
  component: Icon,
};

export const IconPrimary = () => (
  <Icon
    borderColor={"#00dfff"}
    backgroundColor={"#00dfff"}
    widthType={EWithType.SMALL}
    heigthType={EHeightType.SMALL}
    shadowType={EShadowType.MEDIUM}
    borderType={EBorderType.CIRCLE}
  >
    <img style={{height:"30px",width:"30px"}} src={IconLogo} alt="logo"/>
  </Icon>
);

IconPrimary.storyName = "A Primary Icon";
