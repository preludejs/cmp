import { type Cmp, eq } from './prelude.js'

const equal =
  <T>(cmp: Cmp<T>) =>
    (a: T, b: T) =>
      cmp(a, b) === eq

export default equal
