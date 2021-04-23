import React, { Fragment } from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import Icon from "../Icon";
import { InputContainer, InputWrapper } from "./Input.styles";

export interface IInput extends IGeneralProps {
  /**
   * Placeholder Input to show
   */
  placeholder?: string;
  /**
   * Identifier Input
   */
  name: string;
  /**
   * Value Input
   */
  value: any;
  /**
   * Prefix Content Input
   */
  prefix?: any;
}

const Input = ({ placeholder, name, value, prefix, ...args }: IInput) => {
  const renderInput = () => (
    <InputContainer
      placeholder={placeholder}
      name={name}
      value={value}
      hasIcon={!!prefix}
      {...args}
    />
  );

  return (
    <Fragment>
      {!prefix && renderInput()}

      {prefix && (
        <InputWrapper {...args}>
          {prefix}
          {renderInput()}
        </InputWrapper>
      )}
    </Fragment>
  );
};

Input.defaultProps = {
  placeholder: "",
  prefix: null,
};

export default Input;
