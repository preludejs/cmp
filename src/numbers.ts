import sign from './sign.js'
import type { Numbers } from './prelude.js'

/** @returns number comparision function. */
const numbers: Numbers =
  (a, b) =>
    sign(a - b)

export default numbers
