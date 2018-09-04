'use strict';
function rank_by_two_large_one_small(collection){
  let sorted = collection.sort((a,b)=>a-b);
  for(var i=0; i < sorted.length - 2; i += 3) {
    let a = sorted[i];
    let b = sorted[i+1];
    let c = sorted[i+2];
    sorted[i] = b;
    sorted[i+1] = c;
    sorted[i+2] = a;
  }
  return sorted;
}
module.exports = rank_by_two_large_one_small;
