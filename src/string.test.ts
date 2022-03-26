import * as Cmp from './index.js'

test('sort', () => {
  expect([ 'world', 'hello' ].sort(Cmp.string)).toEqual([
    'hello',
    'world'
  ])
})
