import { type R, eq, asc, dsc } from './prelude.js'

/**
 * Compares numbers, singleton values follow `NaN < -Infinity < finite numbers < Infinity` ordering.
 * NaN is considered equal to itself.
 * -0 is considered equal to 0.
 *
 * @see kind
 */
const number =
  (a: number, b: number): R => {
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
