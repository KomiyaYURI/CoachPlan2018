'use strict';


var get_integer_interval = require('./get_integer_interval.js');
function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码

  // for (var i = number_a; i >= number_b ; i--){
  //
  //
  //     reArray.push(String.fromCharCode(96 + i) );
  // }

  return get_integer_interval(number_a, number_b).map(i => get_letter(i));

}

function get_letter(i) {
  i--;
  let letter = '';
  while (i >= 0) {
    letter = String.fromCharCode((97 + (i % 26))) + letter;
    i = parseInt(i / 26) - 1;
  }
  return letter;
}

module.exports = get_letter_interval_2;

