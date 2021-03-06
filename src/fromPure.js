import compose from 'ramda/src/compose'
import ifElse from 'ramda/src/ifElse'
import apply from 'ramda/src/apply'
import map from 'ramda/src/map'
import uniq from 'ramda/src/uniq'
import evolve from 'ramda/src/evolve'
import isArrayLike from 'ramda/src/isArrayLike'
import path from 'ramda/src/path'
import append from 'ramda/src/append'
import converge from 'ramda/src/converge'
import unless from 'ramda/src/unless'
import always from 'ramda/src/always'
import not from 'ramda/src/not'
import isNil from 'ramda/src/isNil'
import when from 'ramda/src/when'
import merge from 'ramda/src/merge'

const fromPure = (func, funcName = '') =>
  (name, config = {}, message = func.message) =>
    ifElse(
      compose(isArrayLike, always(name)),
      f => apply(compose, map(n => fromPure(func, funcName)(n, config, message), name))(f),
      when(
        compose(
          not,
          isNil,
          path([ 'fields', name ])
        ),
        unless(
          converge(func, [ path([ 'fields', name, 'value' ]), always(config) ]),
          compose(
            evolve({
              errors: compose(
                evolve({ [name]: compose(uniq, append({ name: funcName, message })) }),
                merge({ [name]: [] })
              )
            }),
          )
        )
      )
    )

export default fromPure
