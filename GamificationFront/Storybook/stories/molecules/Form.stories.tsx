// import React from 'react';
// import Form from '../../molecules/Form';
import React from 'react';
import FormMedium from '../../molecules/FormMedium';
import FormSmall from '../../molecules/FormSmall';
// import {} from '.'
export default {
  title: 'Molecules/Form',
  // component: FormSmall,
  //   argTypes: {
  //     isLink: { control: 'boolean' },
  //     hasPadding: { control: 'boolean' },
  //     link: { control: 'text' },
  //     children: { control: 'text' },
  //     borderColor: { control: 'color' },
  //     backgroundColor: { control: 'color' },
  //     textColor: { control: 'color' },
  //     widthType: { control: { type: 'select', options: mapEnum(EWithType) } },
  //     shadowType: { control: { type: 'select', options: mapEnum(EShadowType) } },
  //     borderType: { control: { type: 'select', options: mapEnum(EBorderType) } },
  //     heigthType: { control: { type: 'select', options: mapEnum(EHeightType) } },
  //   },
};
export const SmallForm = (args : any) => (
  <div>
    <FormSmall {...args} />
  </div>
);
SmallForm.storyName = 'Small Form';

export const MediumForm = (args : any) => (
  <div>
    <FormMedium {...args} />
  </div>
);

MediumForm.storyName = 'Medium Form';
