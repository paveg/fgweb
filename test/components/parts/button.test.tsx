import React from 'react'
import { render } from '../../testUtils'
import { Button } from '../../../src/components/parts/button'

describe('Button', () => {
  it('matches snapshot primary', () => {
    const { asFragment } = render(<Button apperance="primary">Primary</Button>, {})
    expect(asFragment()).toMatchSnapshot()
  })
  it('matches snapshot secondary', () => {
    const { asFragment } = render(<Button apperance="secondary">Secondary</Button>, {})
    expect(asFragment()).toMatchSnapshot()
  })
  it('matches snapshot neutral', () => {
    const { asFragment } = render(<Button apperance="neutral">Neutral</Button>, {})
    expect(asFragment()).toMatchSnapshot()
  })
  it('matches snapshot error', () => {
    const { asFragment } = render(<Button apperance="error">Error</Button>, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
