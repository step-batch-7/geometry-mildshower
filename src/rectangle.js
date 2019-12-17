const Point = require("./point");

class Rectangle {
  constructor(pointA, pointC) {
    this.vertexA = new Point(pointA.x, pointA.y);
    this.vertexB = new Point(pointA.x, pointC.y);
    this.vertexC = new Point(pointC.x, pointC.y);
    this.vertexD = new Point(pointC.x, pointA.y);
    Object.defineProperties(this, {
      vertexA: { writable: false },
      vertexB: { writable: false },
      vertexC: { writable: false },
      vertexD: { writable: false }
    });
  }

  toString() {
    const pointA = `(${this.vertexA.x},${this.vertexA.y})`;
    const pointC = `(${this.vertexC.x},${this.vertexC.y})`;
    return `[Rectangle ${pointA} to ${pointC}]`;
  }
}

module.exports = Rectangle;