import * as Predicate from './predicate.js'
import array from './array.js'
import ascending from './ascending.js'
import chain from './chain.js'
import collator from './collator.js'
import curry from './curry.js'
import descending from './descending.js'
import equal from './equal.js'
import locale from './locale.js'
import map from './map.js'
import max from './max.js'
import min from './min.js'
import nonAscending from './non-ascending.js'
import nonDescending from './non-descending.js'
import null_ from './null.js'
import nullish from './nullish.js'
import nullishOr from './nullish-or.js'
import nullOr from './null-or.js'
import number_ from './number.js'
import object from './object.js'
import ofGt from './of-gt.js'
import ofLt from './of-lt.js'
import reversed from './reversed.js'
import sign from './sign.js'
import string_ from './string.js'
import undefinedOr from './undefined-or.js'

export * from './prelude.js'
export * from './bigint.js'

const {
  epsilon,
  every,
  negate
} = Predicate

export {
  array,
  ascending,
  chain,
  collator,
  curry,
  descending,
  epsilon,
  equal,
  every,
  locale,
  map,
  max,
  min,
  negate,
  nonAscending,
  nonDescending,
  null_ as null,
  nullish,
  nullishOr,
  nullOr,
  number_ as number,
  object,
  ofGt,
  ofLt,
  Predicate,
  reversed,
  sign,
  string_ as string,
  undefinedOr
}
