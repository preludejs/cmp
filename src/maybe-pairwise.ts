import { type MaybeCmp, eq, asc, dsc } from './prelude.js'

/** Pairwise comparision on iterables. */
export const maybePairwise =
  <T>(cmp: MaybeCmp<T>) =>
    (a: Iterable<T>, b: Iterable<T>) => {
      const iteratorA = a[Symbol.iterator]()
      const iteratorB = b[Symbol.iterator]()
      try {
        let resultA = iteratorA.next()
        let resultB = iteratorB.next()
        while (!resultA.done && !resultB.done) {
          const resultCmp = cmp(resultA.value, resultB.value)
          if (resultCmp !== eq) {
            return resultCmp
          }
          resultA = iteratorA.next()
          resultB = iteratorB.next()
        }
        if (resultA.done && resultB.done) {
          return eq
        }
        if (resultA.done) {
          return asc
        }
        return dsc
      } finally {
        iteratorA.return?.()
        iteratorB.return?.()
      }
    }

export default maybePairwise
