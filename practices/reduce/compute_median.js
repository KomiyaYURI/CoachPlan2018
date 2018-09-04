'use strict';

function compute_median(collection) {
  //在这里写入代码
  let sortc = collection.sort((a, b) => a - b);
  let length = collection.length;
  if (length % 2 === 0) {
    console.log(sortc);
    return (sortc[(length / 2 - 1)] + sortc[(length / 2)]) / 2;

  }
  else {
    return sortc[(length - 1) / 2]
  }
}

module.exports = compute_median;


