import compose from 'ramda/src/compose'
import evolve from 'ramda/src/evolve'
import merge from 'ramda/src/merge'
import __ from 'ramda/src/__'
import is from 'ramda/src/is'
import mergeWith from 'ramda/src/mergeWith'

const deepMerge = (a, b) =>
  ((is(Object, a) && is(Object, b)) ? mergeWith(deepMerge, a, b) : b)

const validate = (form, check, callback) =>
  (name, changes = {}) =>
    compose(
      callback,
      check,
      evolve({
        fields: deepMerge(__, changes)
      }),
      merge(__, { errors: {} })
    )(form)

export default validate
