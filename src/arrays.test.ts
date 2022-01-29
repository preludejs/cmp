import * as Cmp from './index.js'

test('same', () => {
  expect(Cmp.arrays(Cmp.numbers)(
    [ 3, 5, 4 ],
    [ 3, 5, 4 ]
  )).toBe(Cmp.eq)
})

test('asc', () => {
  expect(Cmp.arrays(Cmp.numbers)(
    [ 3, 5, 4 ],
    [ 3, 6, 4 ]
  )).toBe(Cmp.asc)
  expect(Cmp.arrays(Cmp.numbers)(
    [ 3, 5, 4 ],
    [ 3, 5, 4, 1 ]
  )).toBe(Cmp.asc)
})

test('dsc', () => {
  expect(Cmp.arrays(Cmp.numbers)(
    [ 3, 6, 4 ],
    [ 3, 5, 4 ]
  )).toBe(Cmp.dsc)
  expect(Cmp.arrays(Cmp.numbers)(
    [ 3, 5, 4, 1 ],
    [ 3, 5, 4 ]
  )).toBe(Cmp.dsc)
})
