import { type Cmp, type R, eq, asc, dsc } from './prelude.js'

const undefinedOr =
  <T>(cmp: Cmp<T>) =>
    (a: undefined | T, b: undefined | T): R =>
      a === undefined ?
        b === undefined ?
          eq :
          asc :
        b === undefined ?
          dsc :
          cmp(a, b)

export default undefinedOr
