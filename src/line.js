const arePointsEqual = function(point1, point2) {
  const areXsEqual = point1.x === point2.x;
  const areYsEqual = point1.y === point2.y;
  return areXsEqual && areYsEqual;
};

class Line {
  constructor(start, end) {
    [this.start, this.end] = [{ ...start }, { ...end }];
  }
  isEqualTo(line) {
    const isLineObj = line instanceof Line;
    const areStartsEqual = arePointsEqual(this.start, line.start);
    const areEndsEqual = arePointsEqual(this.end, line.end);
    return areStartsEqual && areEndsEqual && isLineObj;
  }
  toString() {
    let strObj = "Line: ";
    strObj += `(${this.start.x}, ${this.start.y}) to `;
    strObj += `(${this.end.x}, ${this.end.y})`;
    return strObj;
  }
}

module.exports = Line;
