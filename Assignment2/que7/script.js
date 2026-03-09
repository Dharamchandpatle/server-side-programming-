// Bubble sort returns a new sorted array without changing the original.
function bubbleSort(arr) {
  var a = arr.slice();
  var n = a.length;

  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }

  return a;
}

var arr = [64, 34, 25, 12, 22, 11, 90];
var sorted = bubbleSort(arr);

var lines = [];
lines.push("Original: " + JSON.stringify(arr));
lines.push("Sorted:   " + JSON.stringify(sorted));

document.getElementById("output").textContent = lines.join("\n");
