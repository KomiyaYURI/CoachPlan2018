function create_updated_collection(collection_a, object_b) {
  let count = {};
  collection_a.map(parse).forEach(countObj => count.hasOwnProperty(countObj.key) ? count[countObj.key] += countObj.count : count[countObj.key] = countObj.count);
  return Object.keys(count).map(key => Object.create({
    key: key,
    count: object_b.value.includes(key) ? count[key] -= parseInt(count[key] / 3) : count[key]
  }));
}

function parse(element) {
  let index = element.indexOf('-');
  return index === -1
    ? {key: element, count: 1}
    : {key: element.substring(0, index), count: parseInt(element.substring(index + 1))};
}


module.exports = create_updated_collection;
