import React from 'react'
import { render } from '../testUtils'
import { Header } from '../../src/components/header'

describe('Header', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Header />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
