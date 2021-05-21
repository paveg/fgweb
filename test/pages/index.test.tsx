import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../src/pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Alert'))
    expect(window.alert).toHaveBeenCalledWith('alert opened.')
  })
})
