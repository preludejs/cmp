import { type R, eq, asc, dsc } from './prelude.js'

export const bigint =
  (a: bigint, b: bigint): R => {
    if (a < b) {
      return asc
    }
    if (a > b) {
      return dsc
    }
    return eq
  }

export default bigint
