
'use strict';

function hybrid_operation(collection) {
  return collection.map(i=>3*i+2).reduce((x,y)=>x+y);
}

module.exports = hybrid_operation;
