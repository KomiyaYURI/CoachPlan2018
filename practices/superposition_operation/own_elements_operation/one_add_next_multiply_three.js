'use strict';
function one_add_next_multiply_three(collection){
  return collection.map((n, i) => {
    if (i === collection.length - 1) {
      return;
    }
    return 3 * (n + collection[i + 1]);
  }).filter(n => n != undefined);
}
module.exports = one_add_next_multiply_three;
