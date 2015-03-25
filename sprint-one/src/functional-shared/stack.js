var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
    counter : 0,
    storage : {}
  };
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  //pop
  pop : function(){
    var result = null;
    if (this.counter > 0){
      result = this.storage[this.counter - 1];
      delete this.storage[this.counter -1];
      this.counter--;
    }
    return result;
  },
  //push
  push : function(value){
    this.storage[this.counter++] = value;
  },

  //counter
  size : function(){
    // debugger;
    return this.counter;
  }
};


