'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码

  var f = Array.from(new Set(collection_a.concat(collection_b)))
  return f;
}

module.exports = choose_common_elements;
