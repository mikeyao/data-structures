var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.counter = 0;
  stack.storage = {};

  return stack;
};

var stackMethods = {};

stackMethods.pop = function(){
  var result = null;
  if (this.counter > 0){
    result = this.storage[this.counter - 1];
    delete this.storage[this.counter--];
  }
  return result;
};

stackMethods.push = function(value){
  this.storage[this.counter++] = value;
};

stackMethods.size = function(){
  return this.counter;
};


