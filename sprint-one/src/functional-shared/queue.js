var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {
    head : 0,
    tail : 0,
    storage : {}
  };
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  // enqueue
  enqueue : function(value){
    this.storage[this.tail++] = value;
  },
  // dequeue
  dequeue : function(){
    var result = null;
    if ((this.tail - this.head) > 0){
      result = this.storage[this.head];
      delete this.storage[this.head++];
    }
    return result;
  },
  // size
  size : function(){
    return (this.tail - this.head);
  }
};



