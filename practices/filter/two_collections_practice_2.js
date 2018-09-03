'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var f = collection_a.filter(function (x) {
    if( x.indexOf(collection_b ) == -1){

      return x;
    } });
  return f;
}


}

module.exports = choose_no_common_elements;
