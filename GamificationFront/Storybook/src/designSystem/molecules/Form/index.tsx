import React, { useState } from "react";
import {
  EInputType,
  EBorderType,
  EWithType,
  EShadowType,
  EHeightType,
} from "../../../core/domain/enums";
import { FormSchema, SubmitSchema } from "../../../core/domain/interfaces";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

import {
  BoxField,
  BoxInput,
  BoxLabel,
  FormBody,
  FormFooter,
  FormWrapper,
} from "./form.styled";

export interface FormProps {
  formSchema: FormSchema[];
  submitSchema: SubmitSchema;
}

const Form = ({ formSchema, submitSchema }: FormProps) => {
  const buildingInitialState = (): any => {
    let initialState = {};
    formSchema.map((field: FormSchema) => {
      initialState[field.name] = field.defaultValue != undefined ? field.defaultValue : '';
    });
    return initialState;
  };

  const [form, setForm] = useState(buildingInitialState());

  const handleChange = (value: any, inputType: string) => {
    switch (inputType) {
      case "TEXTFIELD":
        setForm({
          ...form,
          [value.target.name]: value.target.value,
        });
        return;
      case "SELECT":
        const index = value.target.selectedIndex;
        const valueSelected = value.target.options[index].value;
        console.log(valueSelected);
        setForm({
          ...form,
          [value.target.name]: valueSelected,
        });
        return;
    }
  };

  return (
    <FormWrapper>
      <FormBody>
        {formSchema.map((field: FormSchema, index: number) => (
          <BoxField key={index}>
            <BoxLabel>
              <Label children={field.label} hasPadding={false} />
            </BoxLabel>
            <BoxInput>
              <Input
                placeholder={field.placeholder}
                inputType={field.type}
                borderType={EBorderType.ROUNDED}
                textFieldType={field.textType}
                widthType={EWithType.FULL}
                hasPadding={true}
                name={field.name}
                value={form[field.name]}
                selectItems={field.items}
                onChange={(e: any) => {
                  handleChange(e, field.type);
                }}
              />
            </BoxInput>
          </BoxField>
        ))}
      </FormBody>

      <FormFooter>
        <Button
          onClick={() => {
            submitSchema.onSubmit(form);
          }}
          children={submitSchema.label}
          textColor={"#7f9cf5"}
          borderColor={"white"}
          backgroundColor={"white"}
          widthType={EWithType.SMALL}
          heigthType={EHeightType.SMALL}
          shadowType={EShadowType.XLARGE}
          borderType={EBorderType.PILLSHAPE}
        />
      </FormFooter>
    </FormWrapper>
  );
};

export default Form;
