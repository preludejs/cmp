import { R, oneBillionth } from './prelude.js'

/** @returns number comparision function with epsilon (defaults to 1e-9). */
const epsilon =
  (a: number, b: number, epsilon_ = oneBillionth): R => {
    const c = a - b
    return Math.abs(c) <= epsilon_ ?
      0 :
      c < 0 ?
        -1 :
        1
  }

export default epsilon
