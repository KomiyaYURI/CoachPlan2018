function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let b = [].concat(...collection_b);
  return collection_a.filter(value => b.includes(value));
}

module.exports = collect_same_elements;
