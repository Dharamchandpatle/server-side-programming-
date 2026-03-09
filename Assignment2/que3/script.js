// Quick sort returns a new sorted array without changing the original.
function quickSort(arr) {
  if (arr.length <= 1) return arr.slice();

  var pivot = arr[arr.length - 1];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

var arr = [10, 7, 8, 9, 1, 5];
var sorted = quickSort(arr);

var lines = [];
lines.push("Original: " + JSON.stringify(arr));
lines.push("Sorted:   " + JSON.stringify(sorted));

document.getElementById("output").textContent = lines.join("\n");
