import { dsc, type Cmp } from './prelude.js'

/** @returns minimum element from provided list of arguments. */
const min =
  <T>(cmp: Cmp<T>, first: T, ...rest: T[]): T =>
    rest.reduce((r, _) => cmp(r, _) === dsc ? _ : r, first)

export default min
