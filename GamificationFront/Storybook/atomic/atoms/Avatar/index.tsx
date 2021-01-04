import React, { Fragment } from "react";
import { EShadowType, EBorderType, EWithType, EHeightType } from "../../../core/domain/enums";
import { AvatarContainer } from "./avatar.styled";

interface IAvatar {
  /**
   * Content Button to show
   */
  children: string;
  /**
   * Shadow Type of Button with options
   */
  shadowType?: EShadowType;
  /**
   * Border Type of Button with options
   */
  borderType?: EBorderType;
  /**
   * Width Type of Button with options
   */
  widthType?: EWithType;
  /**
   * Height Type of Button with options
   */
  heigthType?: EHeightType;
}

const Avatar = ({
    children,
    borderType,
    shadowType,
    widthType,
    heigthType
}: IAvatar) => {
  return (
    <AvatarContainer>
        {children}
    </AvatarContainer>
  );
};

Avatar.defaultProps = {
};

export default Avatar;