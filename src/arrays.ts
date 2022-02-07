import { asc, eq, dsc, type Cmp } from './prelude.js'
import numbers from './numbers.js'

/**
 * Compares arrays element-wise up to common length.
 *
 * If all are equal then returns comparision result on array lengths.
 */
export const arrays =
  <T>(cmp: Cmp<T>) =>
    (as: T[], bs: T[]) => {
      const n = Math.min(as.length, bs.length)
      for (let i = 0; i < n; i++) {
        switch (cmp(as[i], bs[i])) {
          case asc:
            return asc
          case eq:
            break
          case dsc:
            return dsc
        }
      }
      return numbers(as.length, bs.length)
    }

export default arrays
