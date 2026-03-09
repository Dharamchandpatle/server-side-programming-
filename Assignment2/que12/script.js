// Check if a value is a RegExp object.
function isRegExp(value) {
  return value instanceof RegExp;
}

var values = [/abc/, new RegExp("ab"), "ab", { pattern: "ab" }];

var lines = [];
for (var i = 0; i < values.length; i++) {
  lines.push(String(values[i]) + " -> " + isRegExp(values[i]));
}

document.getElementById("output").textContent = lines.join("\n");
