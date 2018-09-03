'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(e=>{
    e--;
    let letter = '';
    while (e >= 0){
      letter = String.fromCharCode((97+ (e % 26))) + letter;
      e = parseInt(e / 26) - 1;
    }
    return letter;
  });
};

module.exports = number_map_to_word_over_26;
