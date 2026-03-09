// Check if a numeric array is sorted in non-decreasing order.
function isSorted(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

var arr1 = [1, 2, 2, 4, 8];
var arr2 = [3, 2, 1];

var lines = [];
lines.push("Array 1: " + JSON.stringify(arr1) + " -> " + isSorted(arr1));
lines.push("Array 2: " + JSON.stringify(arr2) + " -> " + isSorted(arr2));

document.getElementById("output").textContent = lines.join("\n");
