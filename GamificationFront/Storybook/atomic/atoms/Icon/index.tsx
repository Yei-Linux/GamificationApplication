import React from "react";
import { EBorderType, EHeightType, EShadowType, EWithType } from "../../../core/domain/enums";
import { CustomIcon } from "./icon.styled";

interface IIcon {
    children: React.ReactNode;
    backgroundColor?: string;
    borderColor?: string;
    shadowType?: EShadowType;
    borderType?: EBorderType;
    widthType?: EWithType;
    heigthType?: EHeightType;
}

const Icon = ({
    children,
    backgroundColor = 'white',
    borderColor = 'black',
    borderType,
    shadowType,
    widthType,
    heigthType,
}: IIcon) => {
    return (
        <CustomIcon
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            shadowType={shadowType}
            borderType={borderType}
            widthType={widthType}
            heigthType={heigthType}
      >
        {children}
      </CustomIcon>
    );
}

export default Icon;
