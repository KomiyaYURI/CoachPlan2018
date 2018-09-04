'use strict';
var single_element = function(collection){
  let even = collection.filter((n,i)=>i%2===1);
  return even.filter(n=>even.indexOf(n) === even.lastIndexOf(n));
};
module.exports = single_element;
