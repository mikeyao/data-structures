var Tree = function(value){
  var newTree = _.extend({}, treeMethods);

  newTree.value = value;
  newTree.children = [];

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target){

  // var search = function(tree){

  //   var bool = false;
  //   if (tree.value === target){
  //     return true;
  //   }
  //   _.each(tree.children, function(val){
  //     bool = bool || search(val);
  //   });
  //   return bool;
  // };

  // return search(this);

   return _.reduce(this.children, function(wasFound, child){
     return wasFound || child.contains(target);
  }, this.value === target);


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
