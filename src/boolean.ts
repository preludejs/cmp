import { type R, eq, asc, dsc } from './prelude.js'

export const boolean =
  (a: boolean, b: boolean): R =>
    a === b ? eq : a ? dsc : asc

export default boolean
