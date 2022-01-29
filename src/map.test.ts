import * as Cmp from './index.js'

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
