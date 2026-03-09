// Redirect the browser to the provided URL.
function redirectTo(url) {
  window.location.href = url;
}

document.getElementById("goBtn").addEventListener("click", function () {
  redirectTo("https://example.com");
});
