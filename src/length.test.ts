import * as Cmp from './index.js'

test('length', () => {
  const a = [ 1, 2, 3 ]
  const b = [ 1, 2 ]
  expect(Cmp.length(a, b)).toBe(Cmp.dsc)
  expect(Cmp.length(b, a)).toBe(Cmp.asc)
})

test('equal', () => {
  const a = [ 1, 2, 3 ]
  const b = [ 1, 2, 3 ]
  expect(Cmp.length(a, b)).toBe(Cmp.eq)
  expect(Cmp.length(b, a)).toBe(Cmp.eq)
})
