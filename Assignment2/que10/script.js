// Check if a value is exactly null.
function isNull(value) {
  return value === null;
}

var values = [null, 0, "", undefined, false];

var lines = [];
for (var i = 0; i < values.length; i++) {
  lines.push(String(values[i]) + " -> " + isNull(values[i]));
}

document.getElementById("output").textContent = lines.join("\n");
