import * as Cmp from './index.js'

test('sort', () => {
  expect([ 'world', 'hello' ].sort(Cmp.strings)).toEqual([
    'hello',
    'world'
  ])
})
