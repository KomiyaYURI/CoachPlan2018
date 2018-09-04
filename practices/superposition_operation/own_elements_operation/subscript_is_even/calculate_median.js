'use strict';
var calculate_median = function(collection){
  let even_index_collection = collection.filter((n, i)=>i%2===1);
  return get_median(even_index_collection);
};

function get_median(collection) {
  let array = collection.sort((a,b)=>a-b);
  let lowMid = Math.floor((array.length - 1) / 2);
  let hiMid = Math.ceil((array.length - 1) / 2);
  return (array[lowMid] + array[hiMid]) / 2;
}
module.exports = calculate_median;
