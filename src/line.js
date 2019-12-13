const arePointsEqual = function(point1, point2) {
  const areXsEqual = point1.x === point2.x;
  const areYsEqual = point1.y === point2.y;
  return areXsEqual && areYsEqual;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }
  isEqualTo(line) {
    const isLineObj = line instanceof Line;
    const areStartsEqual = arePointsEqual(this.start, line.start);
    const areEndsEqual = arePointsEqual(this.end, line.end);
    return areStartsEqual && areEndsEqual && isLineObj;
  }
  toString() {
    const start = `(${this.start.x}, ${this.start.y})`;
    const end = `(${this.end.x}, ${this.end.y})`;
    return `Line: ${start} to ${end}`;
  }
}

module.exports = Line;
