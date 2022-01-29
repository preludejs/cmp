import type { Tail } from './prelude.js'
import sign from './sign.js'

/** @returns locale aware string comparision function. */
const locale =
  (...args: Tail<Parameters<String['localeCompare']>>) =>
    (a: string, b: string) =>
      sign(a.localeCompare(b, ...args))

export default locale
