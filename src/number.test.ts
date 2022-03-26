import * as Cmp from './index.js'

test('number', () => {
  expect(Cmp.number(1, 1)).toBe(Cmp.eq)
  expect(Cmp.number(-1, 1)).toBe(Cmp.asc)
  expect(Cmp.number(1, -1)).toBe(Cmp.dsc)
  expect(Cmp.number(Infinity, Infinity)).toBe(Cmp.eq)
  expect(Cmp.number(Infinity, -Infinity)).toBe(Cmp.dsc)
  expect(Cmp.number(-Infinity, Infinity)).toBe(Cmp.asc)
  expect(Cmp.number(-Infinity, -Infinity)).toBe(Cmp.eq)
  expect(() => Cmp.number(NaN, 1)).toThrow('Expected number, got NaN.')
  expect(() => Cmp.number(1, NaN)).toThrow('Expected number, got NaN.')
})
