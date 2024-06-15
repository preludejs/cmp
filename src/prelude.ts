/** Comparision result type. */
export type R =
  | -1
  | 0
  | 1

/** Comparision result that may not be defined. */
export type MaybeR =
  | undefined
  | R

/** Comparision function type. */
export type Cmp<Lhs, Rhs = Lhs> =
  (lhs: Lhs, rhs: Rhs) =>
    R

/** Comparision function that may not return comparision result. */
export type MaybeCmp<Lhs, Rhs = Lhs> =
  (lhs: Lhs, rhs: Rhs) =>
    MaybeR

/** Curried comparision function type. */
export type Cmp1<T> =
  (a: T) =>
    R

/** Comparision function type. */
export type t<Lhs, Rhs = Lhs> =
  Cmp<Lhs, Rhs>

export type Tail<T> =
  T extends [_: unknown, ...tail: infer U] ?
    U :
    never

/** Equal comparision result. */
export const eq: R =
  0

/** Ascending comparision result. */
export const asc: R =
  -1

/** Descending comparision result. */
export const dsc: R =
  1

export type Value<T> =
  T extends Cmp<infer U> ?
    U :
    never
