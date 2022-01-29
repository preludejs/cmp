import numbers from './numbers.js'
import type { Cmp } from './prelude.js'

/** @returns `null` comparision function; `null` value is considered lower than non-`null`. */
const nulls: Cmp<unknown> =
  (a, b) =>
    numbers(
      a === null ? 0 : 1,
      b === null ? 0 : 1
    )

export default nulls
