'use strict';

function average_uneven(collection) {
  let array = collection.filter(i=>i%2==1);
  return array.reduce((x,y)=>x+y)/array.length;
}

module.exports = average_uneven;
