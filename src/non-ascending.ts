import { type Cmp, asc } from './prelude.js'
import type * as Predicate from './predicate.js'

/** Maps comparision function to non-ascending predicate. */
const nonAscending: <T>(cmp: Cmp<T>) => Predicate.t<T> =
  <T>(cmp: Cmp<T>) =>
    (a: T, b: T) =>
      cmp(a, b) !== asc

export default nonAscending
