import * as Cmp from '../cjs/index.js'

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

test('map', () => {
  expect([
    { rank: 3, name: 'a' },
    { rank: 1, name: 'b' },
    { rank: 2, name: 'c' }
  ].sort(Cmp.map(Cmp.numbers, _ => _.rank))).toEqual([
    { rank: 1, name: 'b' },
    { rank: 2, name: 'c' },
    { rank: 3, name: 'a' }
  ])
})

test('chain', () => {
  expect([
    { rank: 3, name: 'a' },
    { rank: 1, name: 'b' },
    { rank: 3, name: 'b' },
    { rank: 2, name: 'c' },
    { rank: 1, name: 'a' }
  ].sort(Cmp.chain(
    Cmp.map(Cmp.numbers, _ => _.rank),
    Cmp.map(Cmp.strings, _ => _.name)
  ))).toEqual([
    { rank: 1, name: 'a' },
    { rank: 1, name: 'b' },
    { rank: 2, name: 'c' },
    { rank: 3, name: 'a' },
    { rank: 3, name: 'b' }
  ])
})
