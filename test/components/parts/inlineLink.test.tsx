import React from 'react'
import { render } from '../../testUtils'
import { InlineLink } from '../../../src/components/parts/inlineLink'

describe('InlineLink', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<InlineLink href="/">HOME</InlineLink>, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
