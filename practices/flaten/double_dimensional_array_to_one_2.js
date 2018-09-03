'use strict';

function double_to_one(collection) {

  //在这里写入代码

  var myarr  = [].concat(...collection)
  myarr = myarr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  })
return myarr;
}

module.exports = double_to_one;
