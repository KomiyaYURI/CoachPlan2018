function create_updated_collection(collection_a, object_b) {
  let res = [];
  collection_a.forEach(kv => {
    if (object_b.value.includes(kv.key)){
      res.push({key:kv.key, count:kv.count-1});
    } else {
      res.push(kv);
    }
  })
  return res;
}

module.exports = create_updated_collection;
