// Convert minutes into hours and remaining minutes.
function timeConvert(minutes) {
  var hours = Math.floor(minutes / 60);
  var mins = minutes % 60;
  return minutes + " minutes = " + hours + " hour(s) and " + mins + " minute(s).";
}

var result = timeConvert(200);

document.getElementById("output").textContent = result;
