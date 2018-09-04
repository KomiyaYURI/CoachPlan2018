'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(i=>i%2==1).map(i=>3*i+2);
}

module.exports = hybrid_operation_to_uneven;
