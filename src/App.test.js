/* global it expect */

import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

it('renders learn react link', () => {
  render(<App />)

  expect(screen.getByText(/hello world/i)).toBeInTheDocument()
})
