import type { Cmp, CmpA } from './prelude.js'

const partialB =
  <T>(cmp: Cmp<T>, b: T): CmpA<T> =>
    _ => cmp(_, b)

export default partialB
