import { type Cmp, type R, eq, asc, dsc } from './prelude.js'

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
