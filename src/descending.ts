import { type Cmp, dsc } from './prelude.js'
import type * as Predicate from './predicate.js'

/** Maps comparision function to descending predicate. */
const descending: <T>(cmp: Cmp<T>) => Predicate.t<T> =
  <T>(cmp: Cmp<T>) =>
    (a: T, b: T) =>
      cmp(a, b) === dsc

export default descending
