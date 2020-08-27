import { sum } from './sum'

describe('Sum 2 numbers', () => {
  it('should return sum of two numbers', () => {
    const result = sum(1, 3)

    expect(result).toBe(4)
  })
})
