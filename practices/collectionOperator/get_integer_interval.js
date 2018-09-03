'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码

  var reArray = new Array();
  //reArray.push(10);
  if (number_a < number_b){

    for (var i = number_a; i <= number_b ; i++){

        reArray.push(i);

    }
  }
  else if (number_a > number_b ){
    for (var i = number_a; i >= number_b ; i--){

        reArray.push(i);

    }


  }
  else if  (number_a == number_b)
  {

      reArray.push(number_a);

  }
  return reArray;



}

module.exports = get_integer_interval;

