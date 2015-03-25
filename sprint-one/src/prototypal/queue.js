var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.head = 0;
  queue.tail = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.dequeue = function(){
  var result = null;
  if ((this.tail - this.head) > 0) {
    result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
  }
  return result;
};

queueMethods.enqueue = function(value){
  this.storage[this.tail++] = value;
};

queueMethods.size = function(){
  return (this.tail - this.head);
};





