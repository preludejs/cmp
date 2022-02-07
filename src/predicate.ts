export type t<T> = (a: T, b: T) => boolean

/** @returns negated predicate function. */
export const negate =
  <T>(f: t<T>) =>
    (a: T, b: T) =>
      !f(a, b)

/** @returns array predicate applying provided element predicate. */
export const every =
  <T>(f: t<T>) =>
    (as: T[]) => {
      for (let i = 1; i < as.length; i++) {
        if (!f(as[i - 1], as[i])) {
          return false
        }
      }
      return true
    }
