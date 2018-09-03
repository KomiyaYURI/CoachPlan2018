'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码

  var r = collection.filter(function (x) {
    return x % 3 == 0;
  });

  return r;
}


module.exports = choose_multiples_of_three;
