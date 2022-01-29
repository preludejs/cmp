import { asc, type Cmp } from './prelude.js'

/** @returns maximum element from provided list of arguments. */
const max =
  <T>(cmp: Cmp<T>, first: T, ...rest: T[]): T =>
    rest.reduce((r, _) => cmp(r, _) === asc ? _ : r, first)

export default max
