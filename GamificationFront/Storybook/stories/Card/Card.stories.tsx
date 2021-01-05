import React from 'react';
import Card from '../../molecules/CardMain';
export default {
  title: 'Molecules/Card',
};
export const CardMain = (args: any) => (
  <div>
    <Card {...args} />
  </div>
);
CardMain.storyName = 'Card Main';
