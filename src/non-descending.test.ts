import * as Cmp from './index.js'

test('non-descending', () => {
  const f = Cmp.every(Cmp.nonDescending(Cmp.number))
  expect(f([])).toBe(true)
  expect(f([ 1 ])).toBe(true)
  expect(f([ 1, 1 ])).toBe(true)
  expect(f([ 1, 0, 2 ])).toBe(false)
})
