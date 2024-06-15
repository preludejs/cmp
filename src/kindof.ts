export const kinds = [
  'undefined',
  'null',
  'NaN',
  'boolean',
  '-Infinity',
  'number',
  'bigint',
  'Infinity',
  'symbol',
  'string',
  'Set',
  'Array',
  'Map',
  'object',
  'function'
] as const

export type Kind =
  typeof kinds[number]

export const rank =
  Object.fromEntries(kinds.map((kind, i) => [kind, i])) as Record<Kind, number>

export const kindof =
  (a: unknown): Kind => {
    const typeof_ = typeof a
    switch (typeof_) {
      case 'number':
        if (Number.isNaN(a)) {
          return 'NaN'
        }
        if (a === Number.POSITIVE_INFINITY) {
          return 'Infinity'
        }
        if (a === Number.NEGATIVE_INFINITY) {
          return '-Infinity'
        }
        return 'number'
      case 'object':
        if (a === null) {
          return 'null'
        }
        if (Array.isArray(a)) {
          return 'Array'
        }
        if (a instanceof Set) {
          return 'Set'
        }
        if (a instanceof Map) {
          return 'Map'
        }
        return 'object'
      default:
        return typeof_
    }
  }

export default kindof
