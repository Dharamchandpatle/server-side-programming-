// Sort all characters in a string in alphabetical order.
function sortStringChars(value) {
  return value.split("").sort().join("");
}

var text = "javascript";
var sorted = sortStringChars(text);

var lines = [];
lines.push("Original: " + text);
lines.push("Sorted:   " + sorted);

document.getElementById("output").textContent = lines.join("\n");
