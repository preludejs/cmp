import * as Cmp from './index.js'

test('object', () => {
  const cmp = Cmp.object({
    major: Cmp.number,
    minor: Cmp.number,
    patch: Cmp.number
  })
  expect(cmp(
    { major: 1, minor: 0, patch: 0 },
    { major: 1, minor: 0, patch: 0 }
  )).toBe(Cmp.eq)
  expect(cmp(
    { major: 1, minor: 0, patch: 0 },
    { major: 1, minor: 0, patch: 1 }
  )).toBe(Cmp.asc)
  expect(cmp(
    { major: 1, minor: 0, patch: 1 },
    { major: 1, minor: 0, patch: 0 }
  )).toBe(Cmp.dsc)
  expect(cmp(
    { major: 1, minor: 0, patch: 0 },
    { major: 1, minor: 1, patch: 0 }
  )).toBe(Cmp.asc)
  expect(cmp(
    { major: 1, minor: 1, patch: 0 },
    { major: 1, minor: 0, patch: 0 }
  )).toBe(Cmp.dsc)
  expect(cmp(
    { major: 1, minor: 0, patch: 0 },
    { major: 2, minor: 0, patch: 0 }
  )).toBe(Cmp.asc)
  expect(cmp(
    { major: 2, minor: 0, patch: 0 },
    { major: 1, minor: 0, patch: 0 }
  )).toBe(Cmp.dsc)
})

test('object with optionals', () => {
  const cmp = Cmp.object({
    major: Cmp.number,
    minor: Cmp.nullOr(Cmp.number),
    patch: Cmp.nullOr(Cmp.number)
  })
  expect(cmp(
    { major: 1, minor: 0, patch: 0 },
    { major: 1, minor: 0, patch: 0 }
  )).toBe(Cmp.eq)
  expect(cmp(
    { major: 1, minor: 0, patch: 0 },
    { major: 1, minor: 0, patch: null }
  )).toBe(Cmp.dsc)
  expect(cmp(
    { major: 1, minor: 0, patch: null },
    { major: 1, minor: 0, patch: 0 }
  )).toBe(Cmp.asc)
  expect(cmp(
    { major: 1, minor: 0, patch: null },
    { major: 1, minor: null, patch: 0 }
  )).toBe(Cmp.dsc)
})
