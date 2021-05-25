/** Comparision result type. */
export type R = -1 | 0 | 1

/** Comparision function type. */
export type Cmp<T> = (a: T, b: T) => R

/** Comparision function type. */
export type t<T> = Cmp<T>

/** Number comparision function type. */
export type Numbers = Cmp<number>

/** String comparision function type. */
export type Strings = Cmp<string>

/** Arbitrary epsilon (one billionth, 1e-9). */
export const oneBillionth = 1e-9

/** Equal comparision result. */
export const equal: R = 0

/** Ascending comparision result. */
export const asc: R = -1

/** Descending comparision result. */
export const dsc: R = 1

/**
 * @returns sign of a number.
 * @throws {TypeError} if `value` is `NaN`.
 */
export const sign =
  (value: number): R => {
    const sign_ = Math.sign(value)
    if (isNaN(sign_)) {
      throw new TypeError('Expected number, got NaN.')
    }
    return sign_ as R
  }

/** @returns string comparision function. */
export const strings: Strings =
  (a, b) =>
    a > b ?
      1 :
      a < b ?
        -1 :
        0

/** @returns reversed comparision of `f`. */
export const reversed =
  <T>(f: Cmp<T>): Cmp<T> =>
    (a, b) =>
      f(b, a)

/** @returns number comparision function. */
export const numbers: Numbers =
  (a, b) =>
    sign(a - b)

/** @returns number comparision function with epsilon (defaults to 1e-9). */
export const epsilon =
  (a: number, b: number, epsilon_ = oneBillionth): R => {
    const c = a - b
    return Math.abs(c) <= epsilon_ ?
      0 :
      c < 0 ?
        -1 :
        1
  }
