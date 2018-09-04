'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var res = {}

  // for (var c in collection) {
  collection.forEach(c => {

    if (!res[c])
      res[c] = 1;
    else
      res[c] += 1;
  })

  return res;
}

module.exports = grouping_count;
