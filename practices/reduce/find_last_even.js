'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let res;
  collection.forEach(i => {
    if (i % 2 === 0) {
      res = i;
    }
  })
  return res;
}

module.exports = find_last_even;
