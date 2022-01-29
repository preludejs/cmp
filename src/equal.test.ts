import * as Cmp from './index.js'

test('locale strings', () => {
  const eq = Cmp.equal(Cmp.locale(undefined, {
    ignorePunctuation: true,
    sensitivity: 'base'
  }))
  expect(eq(
    'Używanie porównywania... jest,  fajne!',
    'uzywanie porownywania jest fajne'
  )).toBe(true)
  expect(eq(
    'Używanie porównywania... jest,  fajne!',
    'uzywanie porownywania jest bardzo fajne'
  )).toBe(false)
})
