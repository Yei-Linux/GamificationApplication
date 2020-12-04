import React from "react";
import { EBorderType, EHeightType, EShadowType, EWithType } from "../../../core/domain/enums";
import { CustomLabel } from "./label.styled";

export interface ILabel {
    /**
     * Content Label to show
    */
   children: string;
   /**
    * Background Color of Label
   */
   backgroundColor?: string;
   /**
    * Text Color of Button
   */
   textColor?: string;
   /**
    * Border Color of Label
   */
   borderColor?: string;
   /**
    * Shadow Type of Label with options
   */
   shadowType?: EShadowType;
   /**
    * Border Type of Label with options
   */
   borderType?: EBorderType;
   /**
    * Width Type of Label with options
   */
   widthType?: EWithType;
   /**
    * Height Type of Label with options
   */
   heigthType?: EHeightType;
   /**
    * Indicate if Label has padding or not
   */
   hasPadding?: boolean;
   /**
    * Indicate if Label has link or not
   */
   isLink?: boolean;
   /**
    * Indicate label link
   */
   link?: string;
}

const Label = ({
    children,
    backgroundColor,
    textColor,
    borderColor,
    borderType,
    shadowType,
    widthType,
    heigthType,
    isLink,
    link,
    hasPadding
} : ILabel) => {
    const labelAditionalProps = isLink ? { href: link } : {}

    return (
      <CustomLabel
        role={"label"}
        {...labelAditionalProps}
        hasPadding={hasPadding}
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderColor={borderColor}
        shadowType={shadowType}
        borderType={borderType}
        widthType={widthType}
        heigthType={heigthType}
      >
        {children}
      </CustomLabel>
    );
}

Label.defaultProps = {
    isLink: false,
    backgroundColor: 'transparent',
    textColor : 'black',
    borderColor : 'transparent',
}

export default Label;