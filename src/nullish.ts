import number from './number.js'
import type { Cmp } from './prelude.js'

/** @returns nullish comparision function; nullish value is considered lower than non-nullish. */
const nullish: Cmp<unknown> =
  (a, b) =>
    number(
      a == null ? 0 : 1,
      b == null ? 0 : 1
    )

export default nullish
