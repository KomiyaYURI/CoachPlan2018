'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码

  var f = collection_a.concat(collection_b.filter(function(v){ return !(collection_a.indexOf(v) > -1)}));
  return f;
  //
  //   var temp = collection_b.filter(v >= collection_a.includes(a));
  //   temp.forEach(v => collection_a.push(v));
  //   return collection_a;
}

module.exports = get_union;

