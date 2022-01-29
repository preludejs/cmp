import { type R, asc, eq, dsc } from './prelude.js'

const ofLt =
  <T>(lt: (a: T, b: T) => boolean) =>
    (a: T, b: T): R =>
      lt(a, b) ?
        asc :
        lt(b, a) ?
          dsc :
          eq

export default ofLt
