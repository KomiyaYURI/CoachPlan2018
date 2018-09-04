'use strict';

function find_first_even(collection) {
  //在这里写入代码

  let res;
  collection.every(i => {
    if (i % 2 === 0) {
      res = i;
      return false
    }
    return true
  })
  return res;
}

module.exports = find_first_even;

