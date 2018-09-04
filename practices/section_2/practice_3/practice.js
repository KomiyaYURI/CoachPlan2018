function count_same_elements(collection) {
  let countMap = {};
  collection.forEach(e => {
    let key = e;
    let count = 1;
    if (e.includes('-')) {
      key = e.split('-')[0];
      count = parseInt(e.split('-')[1])
    } else if (e.includes('[') && e.includes(']')) {
      key = e.substring(0,e.indexOf('['));
      count = parseInt(e.substring(e.indexOf('[') + 1, e.indexOf(']')));
    } else if (e.includes(':')) {
      key = e.split(':')[0];
      count = parseInt(e.split(':')[1]);
    }
    if (!countMap.hasOwnProperty(key)) {
      countMap[key] = count;
      return;
    }
    countMap[key] += count;
  });
  let result = [];
  for(let key in countMap){
    result.push({name:key, summary:countMap[key]});
  }
  return result;
}

module.exports = count_same_elements;
