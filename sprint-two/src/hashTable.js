var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++){
    //this._storage.set(i, {});
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  //obj[k] = v;
  obj.push({"key": k, "value": v});
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  // return obj.hasOwnProperty(k) ? obj[k] : null;
  var result = null;
  _.each(obj, function(tuple){
    if (tuple["key"] === k){
      result = tuple["value"];
    }
  });
  // for (var i = 0; i < obj.length; i++){
  //   if (obj[i]["key"] === k){
  //     result = obj[i]["value"];
  //     return result;
  //   }
  // }
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  // delete obj[k];
  var id = null;
  id = _.each(obj, function(tuple, index){
    if (tuple["key"] === k){
      return index;
    }
  });
  if (id !== null){
    obj.splice(id,1);
  }
};



// Object.keys(obj).length == this._limit;

/*
 * Complexity: What is the time complexity of the above functions?
 */






