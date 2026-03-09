// Insertion sort returns a new sorted array without changing the original.
function insertionSort(arr) {
  var a = arr.slice();

  for (var i = 1; i < a.length; i++) {
    var key = a[i];
    var j = i - 1;

    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }

  return a;
}

var arr = [12, 11, 13, 5, 6];
var sorted = insertionSort(arr);

var lines = [];
lines.push("Original: " + JSON.stringify(arr));
lines.push("Sorted:   " + JSON.stringify(sorted));

document.getElementById("output").textContent = lines.join("\n");
