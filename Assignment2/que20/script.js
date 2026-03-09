// Simple stack implementation using an array.
function Stack() {
  this.items = [];
}

// Add a value to the top of the stack.
Stack.prototype.push = function (value) {
  this.items.push(value);
};

// Remove and return the top value of the stack.
Stack.prototype.pop = function () {
  return this.items.pop();
};

// Check if the stack contains a specific value.
Stack.prototype.contains = function (value) {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i] === value) return true;
  }
  return false;
};

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

var lines = [];
lines.push("Stack: " + JSON.stringify(stack.items));
lines.push("Contains 20: " + stack.contains(20));
lines.push("Contains 50: " + stack.contains(50));

document.getElementById("output").textContent = lines.join("\n");
