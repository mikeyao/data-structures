var HashTable = function(){
  this._limit = 8;
  this._bucketSize = 1;
  this.reset(this._limit);
};

HashTable.prototype.reset = function(limit){
  this._counter = 0;
  this._storage = LimitedArray(limit);
  for (var i = 0; i < limit; i++){
    this._storage.set(i, {});
    // this._storage.set(i, []);
  }
}

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  if (!obj.hasOwnProperty(k)){
    this._counter++;
  }
  obj[k] = v;
  if (this._counter >= 0.75 * this._limit){
      this.resize(this._limit * 2);
  }
  // obj.push({"key": k, "value": v});
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  return obj.hasOwnProperty(k) ? obj[k] : null;
  // var result = null;
  // _.each(obj, function(tuple){
  //   if (tuple["key"] === k){
  //     result = tuple["value"];
  //   }
  // });
  // for (var i = 0; i < obj.length; i++){
  //   if (obj[i]["key"] === k){
  //     result = obj[i]["value"];
  //     return result;
  //   }
  // }
  // return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  if (obj.hasOwnProperty(k)){
    this._counter--;
  }
  delete obj[k];
  if (this._counter < 0.25 * this._limit){
    // debugger;
    this.resize(0.5 * this._limit);
  }
  // var id = null;
  // id = _.each(obj, function(tuple, index){
  //   if (tuple["key"] === k){
  //     return index;
  //   }
  // });
  // if (id !== null){
  //   obj.splice(id,1);
  // }
};

HashTable.prototype.resize = function(newLimit){
  //takeout
  var tempStorage = {};
  for (var i = 0; i < this._limit; i++){
    var obj = this._storage.get(i);
    for (var key in obj){
      tempStorage[key] = obj[key];
    }
  }

  this._limit = newLimit;
  this.reset(newLimit);

  //add it back
  for (var key in tempStorage){
    this.insert(key, tempStorage[key]);
    // this.insert.bind(this, ?)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */






