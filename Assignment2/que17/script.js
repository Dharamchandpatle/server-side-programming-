// Split a string into an array of words.
function splitIntoWords(text) {
  return text.trim().split(/\s+/);
}

var sentence = "JavaScript is fun to learn";
var words = splitIntoWords(sentence);

var lines = [];
lines.push("Text: " + sentence);
lines.push("Words: " + JSON.stringify(words));

document.getElementById("output").textContent = lines.join("\n");
