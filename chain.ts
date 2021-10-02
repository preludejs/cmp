import { R, Cmp, equal } from './prelude.js'

const chain =
  <T>(...cmps: Cmp<T>[]): Cmp<T> =>
    (a: T, b: T) => {
      let r: R = equal
      for (const cmp of cmps) {
        if ((r = cmp(a, b)) !== equal) {
          return r
        }
      }
      return r
    }

export default chain
