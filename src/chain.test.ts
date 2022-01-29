import * as Cmp from './index.js'

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
