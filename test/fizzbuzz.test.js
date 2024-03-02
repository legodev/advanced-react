import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'


describe('fizzbuzz', () => {
  //   it('should be a function')
  //   expect(typeof fizzbuzz).toBe('function')

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
  })

  it('parameter provided should be a number', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should return "buzz" if number is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return "buzz" if number is multiple of 7', () => {
    expect(fizzbuzz(14)).toBe('woff')
  })

  it('should return "buzz" if number is multiple of 3 and 7', () => {
    expect(fizzbuzz(21)).toBe('fizzwoff')
  })

  it('should return "fizzbuzz" if number is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
