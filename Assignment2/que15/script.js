// Pad single-digit numbers with a leading zero.
function pad(value) {
  return value < 10 ? "0" + value : String(value);
}

// Show the current time and update the display every second.
function showTime() {
  var now = new Date();
  var h = pad(now.getHours());
  var m = pad(now.getMinutes());
  var s = pad(now.getSeconds());

  var timeText = h + ":" + m + ":" + s;
  document.getElementById("output").textContent = timeText;
  console.log(timeText);
}

showTime();
setInterval(showTime, 1000);
