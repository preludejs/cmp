import type { Cmp, R } from './prelude.js'

const map =
  <T, U>(cmp: Cmp<U>, f: (value: T) => U, ) =>
    (a: T, b: T): R =>
      cmp(f(a), f(b))

export default map
