import React, { useRef, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import Input from "../Input";
import { IInput } from "../Input/Input";
import {
  OptionWrapper,
  Selectinput,
  SelectOptionsWrapper,
  SelectWrapper,
} from "./Select.styles";

export interface SelectProps extends IInput {
  /**
   * Children Element
   */
  children?: React.ReactNode[];
}

const Select = ({ children, ...args }: SelectProps) => {
  const selectReference: any = useRef();
  const [isToggle, setIsToggle] = useState(false);

  useClickOutside({
    ref: selectReference,
    handleDoAction: () => setIsToggle(false),
  });

  const handleInputClick = (): void => setIsToggle(!isToggle);

  return (
    <SelectWrapper ref={selectReference}>
      <Selectinput onClick={handleInputClick}>
        <Input {...args} />
      </Selectinput>
      <SelectOptionsWrapper isToggle={isToggle}>
        {children}
      </SelectOptionsWrapper>
    </SelectWrapper>
  );
};

Select.Option = ({ children }: any) => (
  <OptionWrapper>{children}</OptionWrapper>
);

Select.defaultProps = {};

export default Select;
