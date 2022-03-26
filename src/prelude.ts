/** Comparision result type. */
export type R = -1 | 0 | 1

/** Comparision function type. */
export type Cmp<T> = (a: T, b: T) => R

/** Curried comparision function type. */
export type Cmp1<T> = (a: T) => R

/** Comparision function type. */
export type t<T> = Cmp<T>

export type Tail<T> =
  T extends [_: unknown, ...tail: infer R] ?
    R :
    never

/** Arbitrary epsilon (one billionth, 1e-9). */
export const oneBillionth = 1e-9

/** Equal comparision result. */
export const eq: R = 0

/** Ascending comparision result. */
export const asc: R = -1

/** Descending comparision result. */
export const dsc: R = 1
