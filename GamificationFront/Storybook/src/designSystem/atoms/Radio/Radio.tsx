import React from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import {
  RadioCheck,
  RadioContainer,
  RadioGroupWrapper,
  RadioInner,
  RadioInput,
  RadioText,
} from "./Radio.styles";

interface IRadioItem {
  children: string;
  value?: string;
  isChecked?: boolean;
}

export interface IRadio extends IGeneralProps {
  /**
   * Children Element
   */
  children: React.ReactNode[];
}

const Radio = ({ children, ...args }: IRadio) => {
  return <RadioGroupWrapper {...args}>{children}</RadioGroupWrapper>;
};

Radio.Item = ({ children, value = "", isChecked = false }: IRadioItem) => (
  <RadioContainer>
    <RadioCheck>
      <RadioInput value={value} />
      <RadioInner isChecked={isChecked} />
    </RadioCheck>
    <RadioText>{children}</RadioText>
  </RadioContainer>
);

Radio.defaultProps = {};

export default Radio;
