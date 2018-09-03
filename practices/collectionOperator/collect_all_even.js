'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var i;
  var myArray=new Array();
  for( i in collection)
  {
    if (i % 2 ==0 && i != 0){
      var ing;
      ing = parseInt(i);
      myArray.push(ing);
    }

  }
  return myArray;
}

module.exports = collect_all_even;
