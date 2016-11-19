import compose from 'ramda/src/compose'
import evolve from 'ramda/src/evolve'
import merge from 'ramda/src/merge'
import __ from 'ramda/src/__'

const validate = (form, check, callback) =>
  (name, changes = {}) =>
    compose(
      callback,
      check,
      evolve({
        fields: { [name]: merge(__, changes) }
      }),
      merge(__, { errors: {} })
    )(form)

export default validate
