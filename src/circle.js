class Circle {
  constructor(center, radius) {
    this.center = { x: center.x, y: center.y };
    this.radius = radius;
  }

  toString() {
    const center = `(${this.center.x},${this.center.y})`;
    return `[Circle @${center} radius ${this.radius}]`;
  }
}

module.exports = Circle;
