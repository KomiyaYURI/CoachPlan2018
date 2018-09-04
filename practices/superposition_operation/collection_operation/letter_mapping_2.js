'use strict';

function average_to_letter(collection) {
  return String.fromCharCode(96+Math.ceil(collection.reduce((x,y)=>x+y)/collection.length));
}

module.exports = average_to_letter;
