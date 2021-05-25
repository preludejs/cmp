import * as Cmp from '../'

test('sign', () => {
  expect(Cmp.sign(Infinity)).toBe(1)
  expect(Cmp.sign(42)).toBe(1)
  expect(Cmp.sign(Number.EPSILON)).toBe(1)
  expect(Cmp.sign(0)).toBe(0)
  expect(Cmp.sign(-Number.EPSILON)).toBe(-1)
  expect(Cmp.sign(-42)).toBe(-1)
  expect(Cmp.sign(-Infinity)).toBe(-1)
  expect(() => Cmp.sign(NaN)).toThrow()
})

test('sort', () => {
  expect([ 'world', 'hello' ].sort(Cmp.strings)).toEqual([
    'hello',
    'world'
  ])
})
