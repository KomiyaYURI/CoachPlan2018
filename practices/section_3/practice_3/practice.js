function create_updated_collection(collection_a, object_b) {
  let set = new Set(collection_a);
  let res = [];
  for(let i of set) {
    res.push({key:i, count:collection_a.filter(e=>e===i).length});
  }
  res.forEach(kv=> {
    if (object_b.value.includes(kv.key)) {
      kv.count = kv.count - Math.floor(kv.count / 3);
    }
  });
  return res;
}

module.exports = create_updated_collection;
