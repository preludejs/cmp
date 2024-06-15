import * as Cmp from './index.js'

test('basic', () => {
  expect(Cmp.number(0, 0)).toBe(Cmp.eq)
  expect(Cmp.number(0, -0)).toBe(Cmp.eq)
  expect(Cmp.number(-0, 0)).toBe(Cmp.eq)
  expect(Cmp.number(-0, -0)).toBe(Cmp.eq)
  expect(Cmp.number(0, 1)).toBe(Cmp.asc)
  expect(Cmp.number(1, 0)).toBe(Cmp.dsc)
})

test('nan', () => {
  expect(Cmp.number(NaN, 0)).toBe(Cmp.asc)
  expect(Cmp.number(NaN, -Infinity)).toBe(Cmp.asc)
  expect(Cmp.number(NaN, Infinity)).toBe(Cmp.asc)
  expect(Cmp.number(NaN, NaN)).toBe(Cmp.eq)
  expect(Cmp.number(0, NaN)).toBe(Cmp.dsc)
  expect(Cmp.number(-Infinity, NaN)).toBe(Cmp.dsc)
  expect(Cmp.number(Infinity, NaN)).toBe(Cmp.dsc)
})

test('infinity', () => {
  expect(Cmp.number(Infinity, 0)).toBe(Cmp.dsc)
  expect(Cmp.number(0, Infinity)).toBe(Cmp.asc)
  expect(Cmp.number(-Infinity, 0)).toBe(Cmp.asc)
  expect(Cmp.number(0, -Infinity)).toBe(Cmp.dsc)
  expect(Cmp.number(Infinity, Infinity)).toBe(Cmp.eq)
  expect(Cmp.number(Infinity, -Infinity)).toBe(Cmp.dsc)
  expect(Cmp.number(-Infinity, Infinity)).toBe(Cmp.asc)
  expect(Cmp.number(-Infinity, -Infinity)).toBe(Cmp.eq)
})
