function collect_same_elements(collection_a, object_b) {
  //在这里写入代码

  return collection_a.map(kv=>kv.key).filter(v=>object_b.value.includes(v));
}

module.exports = collect_same_elements;
