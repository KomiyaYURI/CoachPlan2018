'use strict';
var even_group_calculate_average = function(collection){
  let even = collection.filter((n,i)=>i%2==1 && n%2==0);
  let less_than_10 = even.filter(i=>i<10);
  let less_than_100 = even.filter(i=>i>=10&&i<100);
  let more_than_100 = even.filter(i=>i>=100);
  let res = [];
  if (even.length===0){
    res = [0];
  } else if (less_than_10.length === 0 && less_than_100.length === 0) {
    res = [average(more_than_100)];
  } else {
    res = [average(less_than_10), average(less_than_100), average(more_than_100)];
  }
  return res;

};

function average(collection) {
  return collection.reduce((a,b)=>a+b)/collection.length;
}
module.exports = even_group_calculate_average;
