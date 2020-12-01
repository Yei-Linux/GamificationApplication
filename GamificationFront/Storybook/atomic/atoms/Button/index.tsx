import React from "react";
import { EBorderType, EHeightType, EShadowType, EWithType } from "../../../core/domain/enums";
import { CustomButton } from "./button.styled";

export interface IButton {
  /**
   * Content Button to show
  */
  children: string;
  /**
   * Background Color of Button
  */
  backgroundColor?: string;
  /**
   * Text Color of Button
  */
  textColor?: string;
  /**
   * Border Color of Button
  */
  borderColor?: string;
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
  /**
   * Indicate if button will has an icon or not
  */
  hasIcon?: boolean;
  /**
   * Icon element to show in button
  */
  iconDiv?: React.ReactNode
}

const Button = ({
  children,
  backgroundColor,
  textColor,
  borderColor,
  borderType,
  shadowType,
  widthType,
  heigthType,
}: IButton) => {
  return (
    <CustomButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      shadowType={shadowType}
      borderType={borderType}
      widthType={widthType}
      heigthType={heigthType}
    >
      {children}
    </CustomButton>
  );
};

Button.defaultProps = {
  backgroundColor: 'white',
  textColor : 'black',
  borderColor : 'black',
}

export default Button;
