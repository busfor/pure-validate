'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('ramda/src/path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var depends = function depends(name, config) {
  return function (form) {
    var on = (0, _path2.default)(['fields', config.on, 'value'], form);
    var valid = config.case[on];
    return valid === undefined ? form : valid(form);
  };
};

exports.default = depends;