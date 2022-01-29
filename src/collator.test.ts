import * as Cmp from './index.js'

test('french locale, search usage, base sensitivity', () => {
  const cmp = Cmp.collator(new Intl.Collator('fr', {
    usage: 'search',
    sensitivity: 'base'
  }))
  expect(cmp('Congrès', 'congres')).toBe(Cmp.eq)
  expect(cmp('Assemblée', 'poisson')).toBe(Cmp.asc)
})
