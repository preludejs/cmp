import { asc, eq, dsc, type Cmp, type R, type Value } from './prelude.js'

export const object =
  <Arg extends Record<string, Cmp<any>>>(kvs: Arg) =>
    (a: { [k in keyof Arg]: Value<Arg[k]> }, b: { [k in keyof Arg]: Value<Arg[k]> }): R => {
      for (const k in kvs) {
        switch (kvs[k](a[k], b[k])) {
          case asc:
            return asc
          case eq:
            break
          case dsc:
            return dsc
        }
      }
      return eq
    }

export default object
