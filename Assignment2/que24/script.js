// Parse JSON and handle SyntaxError for invalid input.
function parseJsonSafely(text) {
  try {
    var obj = JSON.parse(text);
    return "Parsed: " + JSON.stringify(obj);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return "SyntaxError caught: " + error.message;
    }
    return "Other error: " + error.message;
  }
}

var badJson = "{ name: 'John', age: 30 }";
var result = parseJsonSafely(badJson);

document.getElementById("output").textContent = result;
