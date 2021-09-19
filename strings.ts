import type { Strings } from './prelude.js'

/** @returns string comparision function. */
const strings: Strings =
  (a, b) =>
    a > b ?
      1 :
      a < b ?
        -1 :
        0

export default strings
