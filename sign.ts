import type { R } from './prelude.js'

/**
 * @returns sign of a number.
 * @throws {TypeError} if `value` is `NaN`.
 */
const sign =
  (value: number): R => {
    const sign_ = Math.sign(value)
    if (isNaN(sign_)) {
      throw new TypeError('Expected number, got NaN.')
    }
    return sign_ as R
  }

export default sign
