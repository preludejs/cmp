import { type R, eq, asc, dsc } from './prelude.js'

/**
 * Compares numeric values - numbers, bigints and numeric strings.
 * Comparisions between different types follow logic in js ie. `1 < '2' < 3n`.
 * Singleton values follow `NaN < -Infinity < finite numbers < Infinity` ordering.
 * NaN is considered equal to itself.
 * -0 is considered equal to 0.
 *
 * @see kind
 */
const number =
  (a: number | bigint | string, b: number | bigint | string): R => {
    if (a < b) {
      return asc
    }
    if (a > b) {
      return dsc
    }
    if (a === b) {
      return eq
    }
    if (Object.is(a, b)) {
      return eq
    }
    if (Number.isNaN(a)) {
      return asc
    }
    return dsc
  }

export default number
