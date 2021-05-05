import React, { useState } from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import useCloneElement from "../../../hooks/useCloneElements";
import Input from "../../atoms/Input";
import Number from "../../atoms/Number";
import Password from "../../atoms/Password";
import Radio from "../../atoms/Radio";
import Select from "../../atoms/Select";
import Switch from "../../atoms/Switch";
import TextArea from "../../atoms/TextArea";

import { FormItemWrapper, FormLabel, FormWrapper } from "./Form.styles";

export interface FormProps extends IGeneralProps {
  children: React.ReactNode;
}

const Form = ({ children, ...args }: FormProps) => {
  return <FormWrapper {...args}>{children}</FormWrapper>;
};

Form.Item = ({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) => {
  const [value, setValue] = useState("");

  const handleChangeValue = (value: any): void => {
    setValue(value);
  };

  const { validatorChildrenLength, childrenWithProps } = useCloneElement({
    children,
    propsElement: {
      name: name,
      width: "NORMAL",
      heigth: "SMALL",
      border: "MEDIUM",
      value,
      onChangeFormItem: handleChangeValue,
    },
    maxChildrenNumber: 1,
    childrenTypes: [Input, Password, TextArea, Select, Radio, Number, Switch],
  });

  if (validatorChildrenLength()) {
    return null;
  }

  return (
    <FormItemWrapper>
      <FormLabel text={label} width="NONE" heigth="NORMAL" border="NONE" />
      {childrenWithProps}
    </FormItemWrapper>
  );
};

Form.defaultProps = {};

export default Form;
