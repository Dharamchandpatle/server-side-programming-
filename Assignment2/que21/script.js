// Simple singly linked list with a head pointer.
function LinkedList() {
  this.head = null;
}

// Check whether the list is empty.
LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};

var list1 = new LinkedList();
var list2 = new LinkedList();
list2.head = { value: 5, next: null };

var lines = [];
lines.push("List 1 empty: " + list1.isEmpty());
lines.push("List 2 empty: " + list2.isEmpty());

document.getElementById("output").textContent = lines.join("\n");
