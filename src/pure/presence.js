import isEmpty from 'ramda/src/isEmpty'
import isNil from 'ramda/src/isNil'

const presence = v => {
  if (typeof v === 'string') {
    return v.trim() !== ''
  }

  return !(isEmpty(v) || isNil(v))
}

presence.message = 'Не может быть пустым'

export default presence
