import type { Cmp, CmpA } from './prelude.js'

/** @returns curried comparision function by prefilling right hand side. */
const partialB =
  <T>(cmp: Cmp<T>, b: T): CmpA<T> =>
    _ => cmp(_, b)

export default partialB
