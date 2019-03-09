(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es7.array.includes'), require('@babel/runtime-corejs2/core-js/array/from'), require('@babel/runtime-corejs2/core-js/object/assign'), require('@babel/runtime-corejs2/core-js/promise'), require('@babel/runtime-corejs2/helpers/classCallCheck')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es7.array.includes', '@babel/runtime-corejs2/core-js/array/from', '@babel/runtime-corejs2/core-js/object/assign', '@babel/runtime-corejs2/core-js/promise', '@babel/runtime-corejs2/helpers/classCallCheck'], factory) :
  (global = global || self, factory(global.pullLoadMore = {}, null, global._Array$from, global._Object$assign, global._Promise, global._classCallCheck));
}(this, function (exports, es7_array_includes, _Array$from, _Object$assign, _Promise, _classCallCheck) { 'use strict';

  _Array$from = _Array$from && _Array$from.hasOwnProperty('default') ? _Array$from['default'] : _Array$from;
  _Object$assign = _Object$assign && _Object$assign.hasOwnProperty('default') ? _Object$assign['default'] : _Object$assign;
  _Promise = _Promise && _Promise.hasOwnProperty('default') ? _Promise['default'] : _Promise;
  _classCallCheck = _classCallCheck && _classCallCheck.hasOwnProperty('default') ? _classCallCheck['default'] : _classCallCheck;

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

  Object.defineProperty(exports, '__esModule', { value: true });

}));
