import * as Cmp from './index.js'

test('epsilon', () => {
  expect(0.1 + 0.2 == 0.3).toBe(false)
  expect(Cmp.epsilon(0.1 + 0.2, 0.3)).toBe(true)
})
