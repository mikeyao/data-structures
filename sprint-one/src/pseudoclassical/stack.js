var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.counter = 0;
  this.storage = {};
};

Stack.prototype.pop = function(){
  var result = null;
  if (this.counter > 0){
    result = this.storage[this.counter - 1];
    delete this.storage[this.counter--];
  }
  return result;
};

Stack.prototype.push = function(value){
  this.storage[this.counter++] = value;
};

Stack.prototype.size = function(){
  return this.counter;
};

