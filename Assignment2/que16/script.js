// Parse a URL string into its main parts.
function parseUrl(urlText) {
  var url = new URL(urlText);
  return {
    href: url.href,
    protocol: url.protocol,
    host: url.host,
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
    search: url.search,
    hash: url.hash
  };
}

var inputUrl = "https://example.com:8080/path/page.html?name=abc#top";
var parsed = parseUrl(inputUrl);

var lines = [];
lines.push("URL: " + inputUrl);
lines.push(JSON.stringify(parsed, null, 2));

document.getElementById("output").textContent = lines.join("\n");
