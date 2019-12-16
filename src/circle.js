const Point = require("./point");

const arePointsEqual = function(point1, point2) {
  const areXsEqual = point1.x === point2.x;
  const areYsEqual = point1.y === point2.y;
  return areXsEqual && areYsEqual;
};

class Circle {
  constructor(center, radius) {
    this.center = new Point(center.x, center.y);
    this.radius = radius;
  }

  toString() {
    const center = `(${this.center.x},${this.center.y})`;
    return `[Circle @${center} radius ${this.radius}]`;
  }

  isEqualTo(other) {
    return (
      other instanceof Circle &&
      this.radius === other.radius &&
      arePointsEqual(this.center, other.center)
    );
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

module.exports = Circle;
