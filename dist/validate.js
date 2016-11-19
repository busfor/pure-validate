'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _evolve = require('ramda/src/evolve');

var _evolve2 = _interopRequireDefault(_evolve);

var _merge = require('ramda/src/merge');

var _merge2 = _interopRequireDefault(_merge);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validate = function validate(form, check, callback) {
  return function (name) {
    var changes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, _compose2.default)(callback, check, (0, _evolve2.default)({
      fields: _defineProperty({}, name, (0, _merge2.default)(_2.default, changes))
    }), (0, _merge2.default)(_2.default, { errors: {} }))(form);
  };
};

exports.default = validate;