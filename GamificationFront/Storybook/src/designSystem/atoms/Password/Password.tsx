import React, { useState } from "react";
import Icon from "../Icon";
import Input, { IInput } from "../Input/Input";

export interface IPassword extends IInput {
  iconVisible: React.ReactNode;
  iconHide: React.ReactNode;
}
const Password = ({ iconHide, iconVisible, ...args }: IPassword) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => setIsVisible(!isVisible);

  const renderIconPass = () => (
    <div onClick={() => handleToggle()}>
      {isVisible ? iconHide : iconVisible}
    </div>
  );

  return <Input prefix={renderIconPass()} {...args} />;
};

export default Password;

Password.defaultProps = {
  positionPrefix: "right",
  iconVisible: <Icon fill="red" />,
  iconHide: <Icon fill="blue" />,
};
