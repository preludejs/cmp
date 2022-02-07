import { type Cmp, eq } from './prelude.js'

/** @returns predicate function returning `true` if elements are equal, `false` otherwise. */
const equal =
  <T>(cmp: Cmp<T>) =>
    (a: T, b: T) =>
      cmp(a, b) === eq

export default equal
