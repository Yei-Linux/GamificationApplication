import React from "react";
import { EBorderType, EHeightType, EShadowType, EWithType } from "../../../core/domain/enums";
import { CustomIcon } from "./icon.styled";

interface IIcon {
    /**
     * Content Icon to show
    */
    children: React.ReactNode;
    /**
     * Background Color of Icon
    */
    backgroundColor?: string;
    /**
     * Border Color of Icon
    */
    borderColor?: string;
    /**
     * Shadow Type of Icon with options
    */
    shadowType?: EShadowType;
    /**
     * Border Type of Icon with options
    */
    borderType?: EBorderType;
    /**
     * Width Type of Icon with options
    */
    widthType?: EWithType;
    /**
     * Height Type of Icon with options
    */
    heigthType?: EHeightType;
    /**
     * Height Type of Icon with options
    */
    hasPadding?: boolean;
}

const Icon = ({
    children,
    backgroundColor,
    borderColor,
    borderType,
    shadowType,
    widthType,
    heigthType,
    hasPadding
}: IIcon) => {
    return (
        <CustomIcon
            role={"icon"}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            shadowType={shadowType}
            borderType={borderType}
            widthType={widthType}
            heigthType={heigthType}
            hasPadding={hasPadding}
      >
        {children}
      </CustomIcon>
    );
}

Icon.defaultProps = {
    backgroundColor: 'white',
    borderColor: 'black',
    widthType: EWithType.NORMAL
}

export default Icon;
