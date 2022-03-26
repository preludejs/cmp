import number from './number.js'
import type { Cmp } from './prelude.js'

/** @returns `null` comparision function; `null` value is considered lower than non-`null`. */
const null_: Cmp<unknown> =
  (a, b) =>
    number(
      a === null ? 0 : 1,
      b === null ? 0 : 1
    )

export default null_
