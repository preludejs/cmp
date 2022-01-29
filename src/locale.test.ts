import * as Cmp from './index.js'

test('accent sensitivity', () => {
  const cmp = Cmp.locale(undefined, { sensitivity: 'accent' })
  expect(cmp('a', 'a')).toBe(Cmp.eq)
  expect(cmp('a', 'A')).toBe(Cmp.eq)
  expect(cmp('a', 'á')).toBe(Cmp.asc)
})

test('base sensitivity', () => {
  const cmp = Cmp.locale(undefined, { sensitivity: 'base' })
  expect(cmp('a', 'a')).toBe(Cmp.eq)
  expect(cmp('a', 'A')).toBe(Cmp.eq)
  expect(cmp('a', 'á')).toBe(Cmp.eq)
  expect(cmp('b', 'a')).toBe(Cmp.dsc)
})
