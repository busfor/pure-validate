import path from 'ramda/src/path'

const depends = (name, config) => form => {
  const on = path([ 'fields', config.on, 'value' ], form)
  const valid = config.case[on]
  return valid === undefined ? form : valid(form)
}

export default depends
