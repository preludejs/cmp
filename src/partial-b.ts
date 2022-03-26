import type { Cmp, Cmp1 } from './prelude.js'

/** @returns curried comparision function by prefilling right hand side. */
const partialB =
  <T>(cmp: Cmp<T>, b: T): Cmp1<T> =>
    _ => cmp(_, b)

export default partialB
