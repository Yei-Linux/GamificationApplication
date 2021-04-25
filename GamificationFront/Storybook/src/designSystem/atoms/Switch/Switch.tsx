import React, { useState } from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { SwitchBall, SwitchWrapper } from "./Switch.styles";

export interface ISwitch extends IGeneralProps {
  defaultChecked: boolean;
}

const Switch = ({ defaultChecked, ...args }: ISwitch) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <SwitchWrapper isChecked={isChecked} {...args} onClick={() => toggle()}>
      <SwitchBall isChecked={isChecked} />
    </SwitchWrapper>
  );
};

Switch.defaultProps = {
  defaultChecked: true,
  border: "ROUNDED",
};

export default Switch;
