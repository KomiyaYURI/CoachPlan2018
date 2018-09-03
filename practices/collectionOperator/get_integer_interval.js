'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码

  let step = number_a > number_b ? -1 : 1;
  let arr = [];
  for (let i = number_a; i !== number_b; i += step) {
    arr.push(i);
  }
  arr.push(number_b);
  return arr;


}

module.exports = get_integer_interval;

