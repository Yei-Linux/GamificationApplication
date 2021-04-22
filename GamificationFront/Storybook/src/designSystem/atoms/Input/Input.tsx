import React from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { InputContainer } from "./Input.styles";

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
  prefix?: React.ReactNode;
}

const Input = ({ placeholder, name, value, prefix, ...args }: IInput) => {
  return <InputContainer placeholder={placeholder} name={name} value={value} {...args} />;
};

Input.defaultProps = {
  placeholder: "",
  prefix: null,
};

export default Input;
