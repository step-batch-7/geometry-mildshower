class Line {
  constructor(x1, y1, x2, y2) {
    this.startPoint = { x: x1, y: y1 };
    this.endPoint = { x: x2, y: y2 };
  }
  isEqual(anotherLine) {
    const areX1sEqual = this.startPoint.x == anotherLine.startPoint.x;
    const areX2sEqual = this.endPoint.x == anotherLine.endPoint.x;
    const areY1sEqual = this.startPoint.y == anotherLine.startPoint.y;
    const areY2sEqual = this.endPoint.y == anotherLine.endPoint.y;
    return areX1sEqual && areX2sEqual && areY1sEqual && areY2sEqual;
  }
  toString() {
    let strObj = "Line: ";
    strObj += `(${this.startPoint.x}, ${this.startPoint.y}) to `;
    strObj += `(${this.endPoint.x}, ${this.endPoint.y})`;
    return strObj;
  }
}

module.exports = Line;
