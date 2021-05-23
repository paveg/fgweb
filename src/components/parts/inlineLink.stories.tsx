import React from 'react'
import { Story, Meta } from '@storybook/react'

import { InlineLink, InlineLinkProps } from './inlineLink'

export default {
  title: 'Example/InlineLink',
  component: InlineLink,
} as Meta

const Template: Story<InlineLinkProps> = (args) => {
  return <InlineLink {...args}>InlineLink</InlineLink>
}

export const Default = Template.bind({})
Default.args = {
  href: '/',
  target: '_blank',
}
