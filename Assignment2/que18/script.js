// Toggle the case of each letter in a string.
function toggleCase(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    if (ch >= "A" && ch <= "Z") {
      result += ch.toLowerCase();
    } else if (ch >= "a" && ch <= "z") {
      result += ch.toUpperCase();
    } else {
      result += ch;
    }
  }
  return result;
}

var input = "JavaScript Is FUN";
var output = toggleCase(input);

var lines = [];
lines.push("Input:  " + input);
lines.push("Output: " + output);

document.getElementById("output").textContent = lines.join("\n");
