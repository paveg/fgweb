import React from 'react'
import { render } from '../testUtils'
import { Container } from '../../src/components/container'

describe('Container', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Container>contents</Container>, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
