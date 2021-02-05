// import React from 'react';
// import Form from '../../molecules/Form';
import React from 'react';
import FormMedium from '../../atomic/molecules/FormMedium';
import FormSmall from '../../atomic/molecules/FormSmall';
// import {} from '.'
export default {
  title: 'Molecules/Form',
};
// export const handlerGetData = (data): void => {
//   console.log(data);
// };

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
