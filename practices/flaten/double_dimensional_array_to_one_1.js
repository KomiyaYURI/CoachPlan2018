'use strict';

function double_to_one(collection) {
  // const a = [1, 2, 3];
  // const b = {a: 1, b: 2};
  // const c = {c: 2, a: 4};
  // console.log(...);
  // console.log({...b, ...c});
  // console.log(1, 2, 3);
  //在这里写入代码
  return [].concat(...collection)
}

module.exports = double_to_one;
