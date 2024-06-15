import * as Cmp from './index.js'

test('maybePairwise', () => {
  const xs = [ 1, 2, 3 ]
  const cmp = Cmp.maybePairwise(Cmp.number)
  expect(cmp(xs, [ 1, 2, 3 ])).toBe(Cmp.eq)
  expect(cmp(xs, [ 1, 2, 4 ])).toBe(Cmp.asc)
  expect(cmp(xs, [ 1, 2, 2 ])).toBe(Cmp.dsc)
  expect(cmp(xs, [ 1, 2, 3, 4 ])).toBe(Cmp.asc)
  expect(cmp(xs, [ 1, 2 ])).toBe(Cmp.dsc)
})
