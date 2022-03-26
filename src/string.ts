import type { R } from './prelude.js'

/** @returns string comparision function. */
const string_ =
  (a: string, b: string): R =>
    a > b ?
      1 :
      a < b ?
        -1 :
        0

export default string_
