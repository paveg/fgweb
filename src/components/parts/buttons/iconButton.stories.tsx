import React from 'react'
import { Story, Meta } from '@storybook/react'
import TwitterIcon from '@material-ui/icons/Twitter'

import { IconButton, IconButtonProps } from './iconButton'

export default {
  title: 'Example/IconButton',
  component: IconButton,
} as Meta

const Template: Story<IconButtonProps> = (args) => {
  return (
    <IconButton IconComponent={TwitterIcon} {...args}>
      IconButton
    </IconButton>
  )
}

export const Button = Template.bind({})
