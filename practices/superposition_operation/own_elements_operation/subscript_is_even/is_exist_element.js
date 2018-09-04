'use strict';
var is_exist_element = function(collection,element){
  return collection.filter((n, i)=> i%2===0 && n === element).length!==0;
};
module.exports = is_exist_element;
