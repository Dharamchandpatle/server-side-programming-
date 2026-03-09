// Check if a value is a number and not NaN.
function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

var values = [123, "123", NaN, Infinity, -5];

var lines = [];
for (var i = 0; i < values.length; i++) {
  lines.push(String(values[i]) + " -> " + isNumber(values[i]));
}

document.getElementById("output").textContent = lines.join("\n");
