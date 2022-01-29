import { R, Cmp, eq } from './prelude.js'

const chain =
  <T>(...cmps: Cmp<T>[]): Cmp<T> =>
    (a: T, b: T) => {
      let r: R = eq
      for (const cmp of cmps) {
        if ((r = cmp(a, b)) !== eq) {
          return r
        }
      }
      return r
    }

export default chain
