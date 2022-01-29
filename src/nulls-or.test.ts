import * as Cmp from './index.js'

describe('nullable numbers', () => {

  const cmp = Cmp.arrays(Cmp.nullsOr(Cmp.numbers))

  test('empty', () => {
    expect(cmp([], [])).toBe(Cmp.eq)
  })

  test('equal', () => {
    expect(cmp(
      [ 5, 3, 4 ],
      [ 5, 3, 4 ]
    )).toBe(Cmp.eq)
  })

  test('nullable ascending', () => {
    expect(cmp(
      [ 5, null, 4 ],
      [ 5, 3, 4 ]
    )).toBe(Cmp.asc)
  })

  test('equal nulls', () => {
    expect(cmp(
      [ null ],
      [ null ]
    )).toBe(Cmp.eq)
  })

  test('ascending nulls', () => {
    expect(cmp(
      [ null ],
      [ null, null ]
    )).toBe(Cmp.asc)
  })

})
