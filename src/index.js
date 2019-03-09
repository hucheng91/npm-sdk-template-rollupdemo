class Test {
  static test = 1;
}

export default Test;

// transform-runtime
new Promise();
Object.assign({}, {})
Array.from([])


//  用到啥就 polyfill 啥
let array = [0, 1, 2, 3, 4];
array.includes(ele => ele > 2);
function test1() {
  console.log("test1");
  return true;
}
export { test1 }