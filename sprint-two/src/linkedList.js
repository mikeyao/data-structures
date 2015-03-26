var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);

    if (list.head === null){
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var result = null;
    if (list.head != null){
      if (list.head === list.tail){
        list.tail = null;
      }
      result = list.head.value;
      list.head = list.head.next;
    }
    return result;
  };

  list.contains = function(target){
    var tracker = _.extend({}, list.head);
    while (tracker){
      if (tracker.value === target){
        return true;
      }
      tracker = tracker.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
