import path from 'ramda/src/path'
import always from 'ramda/src/always'
import fromPure from './fromPure'

const withMessage = (validator, name) => fieldName => form => {
  if (name !== fieldName) return form
  const { value } = path([ 'fields', fieldName ], form)
  const { valid, message } = validator(value)
  return fromPure(always(valid), fieldName)(fieldName, {}, message)(form)
}

export default withMessage
