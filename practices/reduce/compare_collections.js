'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce((acc, num, index) => {
    return acc && collection_b[index] === num;
  })
}

module.exports = compare_collections;


