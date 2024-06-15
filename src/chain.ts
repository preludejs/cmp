import { R, Cmp, eq } from './prelude.js'

/** @returns comparision function based on provided list of comparisions where first non-equal result is returned. */
const chain =
  <T>(...cmps: Cmp<T>[]): Cmp<T> =>
    (a: T, b: T) => {
      let r: R = eq
      for (const cmp of cmps) {
        r = cmp(a, b)
        if (r !== eq) {
          return r
        }
      }
      return r
    }

export default chain
