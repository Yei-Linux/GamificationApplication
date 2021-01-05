// import React from 'react';
// import Form from '../../molecules/Form';
import React from 'react';
import FormMedium from '../../molecules/FormMedium';
import FormSmall from '../../molecules/FormSmall';
// import {} from '.'
export default {
  title: 'Molecules/Form',
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
