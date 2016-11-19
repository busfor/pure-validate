'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function regexp(value, _regexp) {
  if (_regexp instanceof RegExp) {
    return _regexp.test(value);
  }

  return false;
}

regexp.message = 'Неверный формат';

exports.default = regexp;