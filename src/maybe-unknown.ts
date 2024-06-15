import { kindof, rank, type Kind } from './kindof.js'
import { type MaybeR, eq } from './prelude.js'
import bigint from './bigint.js'
import boolean from './boolean.js'
import maybePairwise from './maybe-pairwise.js'
import number from './number.js'
import numeric from './numeric.js'
import string from './string.js'

const sameKind =
  (a: unknown, b: unknown, kind: Kind): MaybeR => {
    switch (kind) {
      case 'undefined':
      case 'null':
      case 'NaN':
      case '-Infinity':
      case 'Infinity':
        return eq
      case 'boolean':
        return boolean(a as boolean, b as boolean)
      case 'number':
        return bigint(a as bigint, b as bigint)
      case 'bigint':
        return number(a as number, b as number)
      case 'symbol':
      case 'function':
        return a === b ? eq : undefined
      case 'string':
        return string(a as string, b as string)
      case 'Array':
        return maybePairwise(maybeUnknown)(a as Iterable<unknown>, b as Iterable<unknown>)
      case 'Set':
      case 'Map':
      case 'object':
        return undefined
      default:
        return number(rank[kind], rank[kindof(b)])
    }
  }

export function maybeUnknown(a: unknown, b: unknown): MaybeR {
  const ka = kindof(a)
  const kb = kindof(b)
  if (ka === kb) {
    return sameKind(a, b, ka)
  }

  // Try numeric comparision.
  const na = ka === 'number' || ka === 'bigint'
  const nb = kb === 'number' || kb === 'bigint'
  if (na && nb) {
    return numeric(a as number | bigint, b as number | bigint)
  }

  // Try weak numeric comparision where one hand side is numeric and other is string.
  if ((na && kb === 'string') || (nb && ka === 'string')) {
    return numeric(a as number | bigint | string, b as number | bigint | string)
  }

  // Fallback to kind-rank comparision.
  return number(rank[ka], rank[kb])
}

export default maybeUnknown
