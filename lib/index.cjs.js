'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('core-js/modules/es7.array.includes');
var _Array$from = _interopDefault(require('@babel/runtime-corejs2/core-js/array/from'));
var _Object$assign = _interopDefault(require('@babel/runtime-corejs2/core-js/object/assign'));
var _Promise = _interopDefault(require('@babel/runtime-corejs2/core-js/promise'));
var _classCallCheck = _interopDefault(require('@babel/runtime-corejs2/helpers/classCallCheck'));

var Test = function Test() {
  _classCallCheck(this, Test);
};

Test.test = 1;

new _Promise();

_Object$assign({}, {});

_Array$from([]); //  用到啥就 polyfill 啥

function test1() {
  console.log("test1");
  return true;
}

exports.default = Test;
exports.test1 = test1;
