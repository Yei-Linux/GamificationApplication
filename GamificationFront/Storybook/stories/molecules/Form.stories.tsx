import React from 'react';
import Form from '../../atomic/molecules/Form';
import FormMedium from '../../atomic/molecules/FormMedium';
import FormSmall from '../../atomic/molecules/FormSmall';
import { EInputType, ETextFieldType } from '../../core/domain/enums';
export default {
  title: 'Molecules/Form',
};

export const DynamicForm  = (args : any) => (
  <div>
    <Form {...args} />
  </div>
)
DynamicForm.args = {
  formSchema: [{
    label: "Nombres",
    placeholder: "Inserta tu nombre",
    type: EInputType.TEXTFIELD,
    name: "fullname",
    defaultValue: "Jesus Alvan",
    hasValidation: false,
    textType: ETextFieldType.TEXT
  },
  {
    label: "Edad",
    placeholder: "Inserta tu edad",
    type: EInputType.TEXTFIELD,
    name: "age",
    hasValidation: false,
    textType: ETextFieldType.NUMBER
  },
  {
    label: "Idioma",
    placeholder: "Selecciona tu idioma",
    type: EInputType.SELECT,
    name: "idioms",
    defaultValue: '078069b1-d276-4fe0-94d3-d111a05d9583',
    hasValidation: false,
    textType: ETextFieldType.TEXT,
    items:[
      {
        key: 'f72d6ea6-a775-4371-9907-5d32180e8061',
        value: 'Ingles',
      },
      {
        key: '078069b1-d276-4fe0-94d3-d111a05d9583',
        value: 'Español',
      },
    ]
  }],
  submitSchema: {
    label: "Registrar",
    placeholder: "",
    onSubmit: (value)=>{console.log(value);},
  }
};
DynamicForm.storyName = "Dynamic Basic Form"

export const SmallForm = (args: any) => (
  <div>
    <FormSmall {...args} />
  </div>
);
SmallForm.args = {
  handlerGetData: (data) => {
    console.log(data);
  },
};
SmallForm.storyName = 'Small Form';

export const MediumForm = (args: any) => (
  <div>
    <FormMedium {...args} />
  </div>
);
MediumForm.args = {
  handlerGetData: (data) => {
    console.log(data);
  },
};

MediumForm.storyName = 'Medium Form';
