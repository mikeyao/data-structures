var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.head = 0;
  this.tail = 0;
  this.storage = {};
};

Queue.prototype.dequeue = function(){
  var result = null;
  if ((this.tail - this.head) > 0) {
    result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
  }
  return result;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.tail++] = value;
};

Queue.prototype.size = function(){
  return (this.tail - this.head);
};


