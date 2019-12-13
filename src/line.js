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

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    const areStartsEqual = arePointsEqual(this.start, other.start);
    const areEndsEqual = arePointsEqual(this.end, other.end);
    return areStartsEqual && areEndsEqual;
  }

  toString() {
    const start = `(${this.start.x}, ${this.start.y})`;
    const end = `(${this.end.x}, ${this.end.y})`;
    return `Line: ${start} to ${end}`;
  }

  get length() {
    const dx = this.start.x - this.end.x;
    const dy = this.start.y - this.end.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  get slope() {
    if (this.length == 0) return NaN;
    const dx = this.start.x - this.end.x;
    const dy = this.start.y - this.end.y;
    return dy / dx;
  }

  // isParallelTo(other) {
  //   if (!(other instanceof Line)) return false;

  //   return slope(this) === slope(other);
  // }
}

module.exports = Line;
