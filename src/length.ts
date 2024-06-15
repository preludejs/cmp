import number from './number.js'
import map from './map.js'

/** Comparision function based on length. */
export const length =
  map(number, (a: { length: number }) => a.length)

export default length
