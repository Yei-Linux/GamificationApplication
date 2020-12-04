import React, { Fragment } from "react";
import { EBorderType, EHeightType, EShadowType, ETextFieldType, EWithType } from "../../../../../core/domain/enums";
import { InputGroup, CustomInput, InputIconContainer } from "../../input.styled";

export interface ITextField {
  placeholder?: string;
  readonly?: boolean;
  children?: React.ReactNode;
  hasPadding?: boolean;
  borderType?: EBorderType;
  shadowType?: EShadowType;
  heigthType?: EHeightType;
  widthType?: EWithType;
  borderColor?: string;
  textFieldType?: ETextFieldType;
}

const TextField = ({
  placeholder,
  readonly,
  children,
  hasPadding,
  borderType,
  shadowType,
  heigthType,
  widthType,
  borderColor,
  textFieldType
}: ITextField) => {
  return (
    <InputGroup>
      {children && <InputIconContainer>{children}</InputIconContainer>}
      <CustomInput
        role="textfield"
        borderColor={borderColor}
        borderType={borderType}
        hasPadding={hasPadding}
        type={textFieldType}
        readOnly={readonly}
        placeholder={placeholder}
        shadowType={shadowType}
        heigthType={heigthType}
        widthType={widthType}
      />
    </InputGroup>
  );
};

TextField.defaultProps = {
  placeholder: "",
  readonly: false,
  textFieldType: "text"
};

export default TextField;
