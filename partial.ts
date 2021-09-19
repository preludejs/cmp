import type { Cmp, CmpB } from './prelude.js'

const partial =
  <T>(cmp: Cmp<T>, a: T): CmpB<T> =>
    _ => cmp(a, _)

export default partial
