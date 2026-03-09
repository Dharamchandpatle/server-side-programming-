// Find all occurrences of a word within text and return their starting indexes.
function findWordIndexes(text, word) {
  if (word.length === 0) return [];

  var indexes = [];
  var startIndex = 0;
  var foundIndex = text.indexOf(word, startIndex);

  while (foundIndex !== -1) {
    indexes.push(foundIndex);
    startIndex = foundIndex + word.length;
    foundIndex = text.indexOf(word, startIndex);
  }

  return indexes;
}

var text = "The rain in Spain stays mainly in the plain";
var word = "in";
var result = findWordIndexes(text, word);

var lines = [];
lines.push("Text: " + text);
lines.push("Word: " + word);
lines.push("Indexes: " + JSON.stringify(result));

document.getElementById("output").textContent = lines.join("\n");
