import React, { Fragment } from "react";
import { EBorderType, ETextFieldType } from "../../../../../core/domain/enums";
import { InputGroup, CustomInput, InputIconContainer } from "../../input.styled";

export interface ITextField {
  placeholder?: string;
  readonly?: boolean;
  children?: React.ReactNode;
  hasPadding?: boolean;
  borderType?: EBorderType;
  borderColor?: string;
  textFieldType?: ETextFieldType;
}

const TextField = ({
  placeholder,
  readonly,
  children,
  hasPadding,
  borderType,
  borderColor,
  textFieldType
}: ITextField) => {
  return (
    <InputGroup>
      {children && <InputIconContainer>{children}</InputIconContainer>}
      <CustomInput
        borderColor={borderColor}
        borderType={borderType}
        hasPadding={hasPadding}
        type={textFieldType}
        readOnly={readonly}
        placeholder={placeholder}
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
