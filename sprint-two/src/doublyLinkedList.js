var DoublyLinkedList = function(){
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
      node.previous = list.tail;
      list.tail = list.tail.next; //or node, either works
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
      if (list.head !== null){
        list.head.previous = null;
      }
    }
    return result;
  };

//   list.contains = function(target){
//     var tracker = _.extend({}, list.head);
//     while (tracker){
//       if (tracker.value === target){
//         return true;
//       }
//       tracker = tracker.next;
//     }
//     return false;
//   };

//   return list;
// };

list.contains = function(target){
    var tracker = _.extend({}, list.tail);
    while (tracker){
      if (tracker.value === target){
        return true;
      }
      tracker = tracker.previous;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
