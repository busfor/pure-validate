'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _ifElse = require('ramda/src/ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

var _apply = require('ramda/src/apply');

var _apply2 = _interopRequireDefault(_apply);

var _map = require('ramda/src/map');

var _map2 = _interopRequireDefault(_map);

var _uniq = require('ramda/src/uniq');

var _uniq2 = _interopRequireDefault(_uniq);

var _evolve2 = require('ramda/src/evolve');

var _evolve3 = _interopRequireDefault(_evolve2);

var _isArrayLike = require('ramda/src/isArrayLike');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _path = require('ramda/src/path');

var _path2 = _interopRequireDefault(_path);

var _append = require('ramda/src/append');

var _append2 = _interopRequireDefault(_append);

var _converge = require('ramda/src/converge');

var _converge2 = _interopRequireDefault(_converge);

var _unless = require('ramda/src/unless');

var _unless2 = _interopRequireDefault(_unless);

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _merge2 = require('ramda/src/merge');

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fromPure = function fromPure(func) {
  var funcName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function (name) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : func.message;
    return (0, _ifElse2.default)((0, _compose2.default)(_isArrayLike2.default, (0, _always2.default)(name)), function (f) {
      return (0, _apply2.default)(_compose2.default, (0, _map2.default)(fromPure(func, funcName), name))(f);
    }, (0, _unless2.default)((0, _converge2.default)(func, [(0, _path2.default)(['fields', name, 'value']), (0, _always2.default)(config)]), (0, _compose2.default)((0, _evolve3.default)({
      errors: (0, _compose2.default)((0, _evolve3.default)(_defineProperty({}, name, (0, _compose2.default)(_uniq2.default, (0, _append2.default)({ name: funcName, message: message })))), (0, _merge3.default)(_defineProperty({}, name, [])))
    }))));
  };
};

exports.default = fromPure;