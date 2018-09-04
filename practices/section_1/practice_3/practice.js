function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
    let i = object_b.value;


  return collection_a.filter(value => i.includes(value));
}

module.exports = collect_same_elements;
