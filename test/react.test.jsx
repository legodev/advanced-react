import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Calculator = () => {
  return (
    <>
      <h1>Calculator</h1>
      {numbers.map((number) => (
        <span key={number}>{number}</span>
      ))}
    </>
  )
}

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach((number) => {
      screen.getByText(number)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)
  })
})
