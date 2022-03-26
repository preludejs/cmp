import type { R } from './prelude.js'

/**
 * Number comparision function.
 * @throws {@link TypeError} if `a` or `b` are {@link NaN}.
 */
const number =
  (a: number, b: number): R => {
    if (isNaN(a) || isNaN(b)) {
      throw new TypeError('Expected number, got NaN.')
    }
    return ((a > b ? 1 : 0) - (b > a ? 1 : 0)) as R
  }

export default number
