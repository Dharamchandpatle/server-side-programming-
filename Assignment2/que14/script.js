// Build readable lines for each book and its reading status.
function formatReadingStatus(list) {
  var lines = [];
  for (var i = 0; i < list.length; i++) {
    var book = list[i];
    lines.push("Title: " + book.title);
    lines.push("Author: " + book.author);
    lines.push("Reading Status: " + book.readingStatus);
    lines.push("---");
  }
  return lines;
}

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];

var lines = formatReadingStatus(library);

document.getElementById("output").textContent = lines.join("\n");
