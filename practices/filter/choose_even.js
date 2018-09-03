'use strict';

function choose_even(collection) {

  //在这里写入代码
  var reArray;
  collection.forEach(function (temp) {
    if (temp % 2 == 0) {
      reArray.push(temp);
    console.log(temp);
    }

  });
  return reArray;
}

module.exports = choose_even;
