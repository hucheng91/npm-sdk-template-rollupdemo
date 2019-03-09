import 'core-js/modules/es7.array.includes';
import _Array$from from '@babel/runtime-corejs2/core-js/array/from';
import _Object$assign from '@babel/runtime-corejs2/core-js/object/assign';
import _Promise from '@babel/runtime-corejs2/core-js/promise';
import _classCallCheck from '@babel/runtime-corejs2/helpers/classCallCheck';

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

export default Test;
export { test1 };
