import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} >Button</Button>
};

export const Default = Template.bind({});
