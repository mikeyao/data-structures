

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = new graphNode(node);
};

Graph.prototype.contains = function(node){
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  for (var neighbor in this.nodes){
    this.removeEdge(neighbor, node);
  }
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.contains(fromNode) ? _.contains(this.nodes[fromNode].neighbours, toNode)
: false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.contains(fromNode) && this.contains(toNode)){
    this.nodes[fromNode].neighbours[toNode] = toNode;
    this.nodes[toNode].neighbours[fromNode] = fromNode;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].neighbours[toNode];
  delete this.nodes[toNode].neighbours[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node){
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graphNode = function(value){
  this.value = value;
  this.neighbours = {};
};

