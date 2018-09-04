
'use strict';

function even_to_letter(collection) {
  return collection.filter(e=>e%2==0).map(i=>String.fromCharCode(96+i));
}

module.exports = even_to_letter;
