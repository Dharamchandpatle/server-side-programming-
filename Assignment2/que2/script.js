// Linear search returns the first index of a target value, or -1 if not found.
function linearSearch(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

var arr = [5, 3, 7, 3, 9];
var target = 3;
var index = linearSearch(arr, target);

var lines = [];
lines.push("Array: " + JSON.stringify(arr));
lines.push("Target: " + target);
lines.push("First index: " + index);

document.getElementById("output").textContent = lines.join("\n");
