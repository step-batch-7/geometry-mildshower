const Line = require("./line");

class Rectangle {
  constructor(pointA, pointC) {
    this.diagonal = new Line(pointA, pointC);
  }
}

module.exports = Rectangle;
