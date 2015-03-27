var BinarySearchTree = function(value){
  var tree = Object.create(BSTMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var BSTMethods = {};


BSTMethods.insert = function(value){
  var helper = function(node, parent, value){
    if (node === null){
      node = BinarySearchTree(value);
      if (value < parent.value){
        parent.left = node;
      } else {
        parent.right = node;
      }
      return;
    } else if (node.value > value){
      helper(node.left, node, value);
    } else {
      helper(node.right, node, value);
    }
  };
  helper(this, null, value);


};

BSTMethods.contains = function(value){
  var tracker = this;
  while(tracker){
    if (tracker.value === value){
      return true;
    } else if (tracker.value < value) {
      tracker = tracker.right;
    } else {
      tracker = tracker.left;
    }
  }
  return false;
};

BSTMethods.depthFirstLog = function(cb){
  var iterator = function(node){
    if (node !== null) {
      // cb.apply(node, node.value);
      cb(node.value);
      iterator(node.left);
      iterator(node.right);
    }
  };
  iterator(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//
