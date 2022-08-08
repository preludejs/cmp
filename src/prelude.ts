/** Comparision result type. */
export type R =
  | -1
  | 0
  | 1

/** Comparision function type. */
export type Cmp<Lhs, Rhs = Lhs> =
  (lhs: Lhs, rhs: Rhs) => R

/** Curried comparision function type. */
export type Cmp1<T> = (a: T) => R

/** Comparision function type. */
export type t<Lhs, Rhs = Lhs> = Cmp<Lhs, Rhs>

export type Tail<T> =
  T extends [_: unknown, ...tail: infer R] ?
    R :
    never

/** Equal comparision result. */
export const eq: R = 0

/** Ascending comparision result. */
export const asc: R = -1

/** Descending comparision result. */
export const dsc: R = 1
