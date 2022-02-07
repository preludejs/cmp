import { type Cmp, type R, eq, asc, dsc } from './prelude.js'

/** @returns composed non-nullish comparision function as nullish-handling function, nullish values are considered lower than non-nullish values. */
const nullishOr =
  <T>(cmp: Cmp<T>) =>
    (a: undefined | null | T, b: undefined | null | T): R =>
      a == null ?
        b == null ?
          eq :
          asc :
        b == null ?
          dsc :
          cmp(a, b)

export default nullishOr
