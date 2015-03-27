var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++){
    this._storage.set(i, {});
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  obj[k] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  return obj.hasOwnProperty(k) ? obj[k] : null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  delete obj[k];
};



// Object.keys(obj).length == this._limit;

/*
 * Complexity: What is the time complexity of the above functions?
 */






