import arrays from './arrays.js'
import chain from './chain.js'
import epsilon from './epsilon.js'
import map from './map.js'
import max from './max.js'
import min from './min.js'
import numbers from './numbers.js'
import partial from './partial.js'
import partialB from './partial-b.js'
import reversed from './reversed.js'
import sign from './sign.js'
import strings from './strings.js'
import nullsOr from './nulls-or.js'
import * as Predicate from './predicate.js'
import ascending from './ascending.js'
import descending from './descending.js'
import nonAscending from './non-ascending.js'
import nonDescending from './non-descending.js'

export * from './prelude.js'

const {
  negate,
  every
} = Predicate

export {
  ascending,
  descending,
  nonAscending,
  nonDescending,
  Predicate,
  nullsOr,
  arrays,
  chain,
  epsilon,
  map,
  max,
  min,
  numbers,
  partial,
  partialB,
  reversed,
  sign,
  strings,
  negate,
  every
}
