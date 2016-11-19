function regexp(value, _regexp) {
  if (_regexp instanceof RegExp) {
    return _regexp.test(value)
  }

  return false
}

regexp.message = 'Неверный формат'

export default regexp
