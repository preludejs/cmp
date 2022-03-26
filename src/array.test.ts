import * as Cmp from './index.js'

test('same', () => {
  expect(Cmp.array(Cmp.number)(
    [ 3, 5, 4 ],
    [ 3, 5, 4 ]
  )).toBe(Cmp.eq)
})

test('asc', () => {
  expect(Cmp.array(Cmp.number)(
    [ 3, 5, 4 ],
    [ 3, 6, 4 ]
  )).toBe(Cmp.asc)
  expect(Cmp.array(Cmp.number)(
    [ 3, 5, 4 ],
    [ 3, 5, 4, 1 ]
  )).toBe(Cmp.asc)
})

test('dsc', () => {
  expect(Cmp.array(Cmp.number)(
    [ 3, 6, 4 ],
    [ 3, 5, 4 ]
  )).toBe(Cmp.dsc)
  expect(Cmp.array(Cmp.number)(
    [ 3, 5, 4, 1 ],
    [ 3, 5, 4 ]
  )).toBe(Cmp.dsc)
})
