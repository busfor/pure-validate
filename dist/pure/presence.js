'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmpty = require('ramda/src/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isNil = require('ramda/src/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var presence = function presence(v) {
  if (typeof v === 'string') {
    return v.trim() !== '';
  }

  return !((0, _isEmpty2.default)(v) || (0, _isNil2.default)(v));
};

presence.message = 'Не может быть пустым';

exports.default = presence;