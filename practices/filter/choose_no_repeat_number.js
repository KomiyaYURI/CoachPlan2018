'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var res = collection.filter(function(item, index, array){
    return array.indexOf(item) === index;
  })
  return res;
}

module.exports = choose_no_repeat_number;
