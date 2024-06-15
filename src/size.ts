import number from './number.js'
import map from './map.js'

/** Comparision function based on size. */
export const size =
  map(number, (a: { size: number }) => a.size)

export default size
