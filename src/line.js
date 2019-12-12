class Line {
  constructor(start, end) {
    [this.start, this.end] = [{ ...start }, { ...end }];
  }
  isEqual(anotherLine) {
    const areX1sEqual = this.start.x == anotherLine.start.x;
    const areX2sEqual = this.end.x == anotherLine.end.x;
    const areY1sEqual = this.start.y == anotherLine.start.y;
    const areY2sEqual = this.end.y == anotherLine.end.y;
    return areX1sEqual && areX2sEqual && areY1sEqual && areY2sEqual;
  }
  toString() {
    let strObj = "Line: ";
    strObj += `(${this.start.x}, ${this.start.y}) to `;
    strObj += `(${this.end.x}, ${this.end.y})`;
    return strObj;
  }
}

module.exports = Line;
