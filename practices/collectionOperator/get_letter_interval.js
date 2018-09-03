'use strict';
var get_integer_interval = require('./get_integer_interval.js');

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  return get_integer_interval(number_a, number_b).map(i => String.fromCharCode((96 + i)));
}

module.exports = get_letter_interval;
