'use strict';

function median_to_letter(collection) {
  let array = collection.sort((a,b)=>a-b);
  let lowMid = Math.ceil((array.length - 1) / 2);
  let hiMid = Math.ceil((array.length - 1) / 2);
  return get_letter_by_number((array[lowMid] + array[hiMid]) / 2);
}

function get_letter_by_number(number) {
  let array = [];
  const total = 26;
  while (number>0) {
    let mod = (number % total == 0) ? 26 : (number % total);
    array.push(mod);
    number = (number - mod) / total;
  }
  return array.reverse().map(i => String.fromCharCode(96 + i)).join('');
}

module.exports = median_to_letter;
