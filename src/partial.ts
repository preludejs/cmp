import type { Cmp, CmpB } from './prelude.js'

/** @returns curried comparision function by prefilling left hand side. */
const partial =
  <T>(cmp: Cmp<T>, a: T): CmpB<T> =>
    _ => cmp(a, _)

export default partial
