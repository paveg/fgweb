import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Parts } from '../../src/pages/parts'

describe('Parts page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Parts />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Parts />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Alert'))
    expect(window.alert).toHaveBeenCalledWith('alert opened.')
  })
})
