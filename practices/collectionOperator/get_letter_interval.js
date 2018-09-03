'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var reArray = new Array();
  //reArray.push(10);
  if (number_a < number_b){

    for (var i = number_a; i <= number_b ; i++){
      reArray.push(String.fromCharCode(96 + i) );
    }
  }
  else if (number_a > number_b ){
    for (var i = number_a; i >= number_b ; i--){

      reArray.push(String.fromCharCode(96 + i) );
    }
  }
  else if  (number_a == number_b)
  {
    reArray.push(String.fromCharCode(96 + number_a) );
  }

  return reArray;
}

module.exports = get_letter_interval;
