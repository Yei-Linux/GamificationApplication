import React from "react";
import Input from "../Input";
import { IInput } from "../Input/Input";

const REGEX__NUMBER = /^[0-9]+$/;

export interface INumber extends IInput {}

const Number = ({ onChange, ...args }: INumber) => {
  const handleTypying = (e: any) => {
    if (REGEX__NUMBER.test(e.target.value)) {
    }
    e.preventDefault();
  };

  return <Input onChange={handleTypying} {...args} />;
};

Number.defaultProps = {};

export default Number;
