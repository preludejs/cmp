import type { Cmp, Cmp1 } from './prelude.js'

/** @returns curried comparision function by prefilling left or right hand side. */
const curry =
  <T>(cmp: Cmp<T>, a: T, position: 'lhs' | 'rhs' = 'lhs'): Cmp1<T> =>
    position === 'lhs' ?
      _ => cmp(a, _) :
      _ => cmp(_, a)

export default curry
