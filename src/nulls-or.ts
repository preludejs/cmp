import { type Cmp, type R, eq, asc, dsc } from './prelude.js'

/** @returns composed non-nullable comparision function as null-handling function, `null` values are considered lower than non-`null` values. */
const nullsOr =
  <T>(cmp: Cmp<T>) =>
    (a: null | T, b: null | T): R =>
      a === null ?
        b === null ?
          eq :
          asc :
        b === null ?
          dsc :
          cmp(a, b)

export default nullsOr
