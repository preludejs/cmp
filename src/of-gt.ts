import { type R, asc, eq, dsc } from './prelude.js'

const ofGt =
  <T>(gt: (a: T, b: T) => boolean) =>
    (a: T, b: T): R =>
      gt(a, b) ?
        dsc :
        gt(b, a) ?
          asc :
          eq

export default ofGt
