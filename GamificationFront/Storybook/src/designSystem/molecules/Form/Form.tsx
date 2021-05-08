import React, { useContext } from "react";
import FormProvider from "../../../context/FormProvider";
import context from "../../../context/FormProvider/context";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import useCloneElement from "../../../hooks/useCloneElements";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Number from "../../atoms/Number";
import Password from "../../atoms/Password";
import Radio from "../../atoms/Radio";
import Select from "../../atoms/Select";
import Switch from "../../atoms/Switch";
import TextArea from "../../atoms/TextArea";

import { FormItemWrapper, FormLabel, FormWrapper } from "./Form.styles";

export interface FormProps extends IGeneralProps {
  onSubmitForm?: () => any;
  children: React.ReactNode;
}

const FormContent = ({ children, onSubmitForm, ...args }: FormProps) => {
  const {} = useContext(context);
  return <FormWrapper {...args}>{children}</FormWrapper>;
};

const Form = ({ children, ...args }: FormProps) => {
  return (
    <FormProvider>
      <FormContent {...args}>{children}</FormContent>
    </FormProvider>
  );
};

Form.Item = ({
  label = "",
  name,
  children,
}: {
  label?: string;
  name: string;
  children: React.ReactNode;
}) => {
  const { formValue, setFormValues, onClickSubmit } = useContext(context);

  const handleChangeValue = (value: any): void => {
    setFormValues({ name, value });
  };

  const submitValues = () => onClickSubmit(formValue);

  const { validatorChildrenLength, childrenWithProps } = useCloneElement({
    children,
    propsElement: {
      name,
      value: formValue?.name?.value,
      onChangeFormItem: handleChangeValue,
    },
    maxChildrenNumber: 1,
    advancedOptions: {
      propsOfElement: [
        { props: { onClick: submitValues }, childrenConditionTypes: [Button] },
      ],
    },
    childrenTypes: [
      Input,
      Password,
      TextArea,
      Select,
      Radio,
      Number,
      Switch,
      Button,
    ],
  });

  if (validatorChildrenLength()) {
    return null;
  }

  return (
    <FormItemWrapper>
      {label != "" && (
        <FormLabel text={label} width="NONE" heigth="NORMAL" border="NONE" />
      )}
      {childrenWithProps}
    </FormItemWrapper>
  );
};

Form.defaultProps = {};

export default Form;
