// Rectangle class with width and height.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Calculate rectangle area.
  area() {
    return this.width * this.height;
  }

  // Calculate rectangle perimeter.
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

var rect = new Rectangle(10, 5);

var lines = [];
lines.push("Width: " + rect.width);
lines.push("Height: " + rect.height);
lines.push("Area: " + rect.area());
lines.push("Perimeter: " + rect.perimeter());

document.getElementById("output").textContent = lines.join("\n");
