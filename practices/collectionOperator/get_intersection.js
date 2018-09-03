'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var c = collection_b.filter(function(v){ return collection_a.indexOf(v) > -1 })

  return c;
}

module.exports = get_intersection;
