// Heapify a subtree to maintain the max-heap property.
function heapify(arr, size, root) {
  var largest = root;
  var left = 2 * root + 1;
  var right = 2 * root + 2;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== root) {
    var temp = arr[root];
    arr[root] = arr[largest];
    arr[largest] = temp;
    heapify(arr, size, largest);
  }
}

// Heap sort returns a new sorted array without changing the original.
function heapSort(arr) {
  var a = arr.slice();
  var n = a.length;

  for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(a, n, i);
  }

  for (var j = n - 1; j > 0; j--) {
    var temp = a[0];
    a[0] = a[j];
    a[j] = temp;
    heapify(a, j, 0);
  }

  return a;
}

var arr = [4, 10, 3, 5, 1];
var sorted = heapSort(arr);

var lines = [];
lines.push("Original: " + JSON.stringify(arr));
lines.push("Sorted:   " + JSON.stringify(sorted));

document.getElementById("output").textContent = lines.join("\n");
