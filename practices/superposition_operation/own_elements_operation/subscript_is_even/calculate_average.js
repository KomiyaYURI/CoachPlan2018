'use strict';
var calculate_average = function(collection){
  let even = collection.filter(i=>i%2==0);
  return even.reduce((x,y)=>x+y)/even.length;
};
module.exports = calculate_average;
