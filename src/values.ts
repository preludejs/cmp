import { Cmp } from './prelude.js'
import maybePairwise from './maybe-pairwise.js'

/** {@link maybePairwise} on .values(). */
export const values =
  <T>(cmp: Cmp<T>) => {
    const pairwiseCmp = maybePairwise(cmp)
    return (a: { values(): Iterable<T> }, b: { values(): Iterable<T> }) =>
      pairwiseCmp(a.values(), b.values())
  }

export default values
