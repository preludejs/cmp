import sign from './sign.js'

/** @returns collator based string comparision function. */
const collator =
  (collator_: Intl.Collator) =>
    (a: string, b: string) =>
      sign(collator_.compare(a, b))

export default collator
