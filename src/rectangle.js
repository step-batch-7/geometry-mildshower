const Point = require("./point");

class Rectangle {
  constructor(pointA, pointC) {
    this.pointA = new Point(pointA.x, pointA.y);
    this.pointB = new Point(pointA.x, pointC.y);
    this.pointC = new Point(pointC.x, pointC.y);
    this.pointD = new Point(pointC.x, pointA.y);
    Object.defineProperties(this, {
      pointA: { writable: false },
      pointB: { writable: false },
      pointC: { writable: false },
      pointD: { writable: false }
    });
  }
}

module.exports = Rectangle;
