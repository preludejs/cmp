import type { Cmp } from './prelude.js'

/** @returns reversed comparision of `f`. */
const reversed =
  <T>(f: Cmp<T>): Cmp<T> =>
    (a, b) =>
      f(b, a)

export default reversed
