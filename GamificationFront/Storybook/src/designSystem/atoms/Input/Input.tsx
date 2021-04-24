import React from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
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
  /**
   * Prefix Position
   */
  positionPrefix?: "left" | "right";
}

const Text = ({ ...args }) => (
  <InputContainer hasIcon={!!args.prefix} {...args} />
);

const Input = ({ ...args }: IInput) => {
  return !args.prefix ? (
    <Text {...args} />
  ) : (
    <InputWrapper {...args}>
      {args.prefix}
      {<Text {...args} />}
    </InputWrapper>
  );
};

Input.defaultProps = {
  name: "gamification",
  value: "",
  placeholder: "",
  prefix: null,
  positionPrefix: "left",
};

export default Input;
