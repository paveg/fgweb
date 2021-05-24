import React from 'react'
import { Story, Meta } from '@storybook/react'

import { IconButton, IconButtonProps } from './iconButton'

export default {
  title: 'Example/Button',
  component: IconButton,
} as Meta

const Template: Story<IconButtonProps> = (args) => {
  return <IconButton {...args}>Button</IconButton>
}

export const Button = Template.bind({})
