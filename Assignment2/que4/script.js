// Merge two sorted arrays into one sorted array.
function merge(left, right) {
  var result = [];
  var i = 0;
  var j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Merge sort returns a new sorted array without changing the original.
function mergeSort(arr) {
  if (arr.length <= 1) return arr.slice();

  var middle = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, middle));
  var right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

var arr = [38, 27, 43, 3, 9, 82, 10];
var sorted = mergeSort(arr);

var lines = [];
lines.push("Original: " + JSON.stringify(arr));
lines.push("Sorted:   " + JSON.stringify(sorted));

document.getElementById("output").textContent = lines.join("\n");
