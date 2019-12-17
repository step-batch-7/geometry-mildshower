const Point = require("./point");

class Circle {
  constructor(center, radius) {
    this.center = new Point(center.x, center.y);
    this.radius = radius;
    Object.defineProperties(this, {
      center: { writable: false },
      radius: { writable: false }
    });
  }

  toString() {
    const center = `(${this.center.x},${this.center.y})`;
    return `[Circle @${center} radius ${this.radius}]`;
  }

  isEqualTo(other) {
    return (
      other instanceof Circle &&
      this.radius === other.radius &&
      this.center.isEqualTo(other.center)
    );
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  hasPoint(point) {
    return this.center.findDistanceTo(point) === this.radius;
  }

  moveTo(point) {
    return new Circle(point, this.radius);
  }

  covers(other) {
    return (
      other instanceof Point && this.center.findDistanceTo(other) <= this.radius
    );
  }
}

module.exports = Circle;
