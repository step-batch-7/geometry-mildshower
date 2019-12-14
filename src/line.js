const arePointsEqual = function(point1, point2) {
  const areXsEqual = point1.x === point2.x;
  const areYsEqual = point1.y === point2.y;
  return areXsEqual && areYsEqual;
};

const isNumInRange = function(range, number) {
  const [lowerLim, higherLim] = range.sort();
  return lowerLim <= number && higherLim >= number;
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
    return `[Line ${start} to ${end}]`;
  }

  get length() {
    const dx = this.start.x - this.end.x;
    const dy = this.start.y - this.end.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  get slope() {
    const dx = this.start.x - this.end.x;
    const dy = this.start.y - this.end.y;
    return dy / dx;
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    return this.slope === other.slope;
  }

  findX(y) {
    if (!isNumInRange([this.start.y, this.end.y], y)) return NaN;
    if (this.slope == 0) return this.start.x;
    const dy = y - this.start.y;
    return dy / this.slope + this.start.x;
  }

  findY(x) {
    if (!isNumInRange([this.start.x, this.end.x], x)) return NaN;
    if (this.slope === Infinity || this.slope === -Infinity)
      return this.start.y;
    const dx = x - this.start.x;
    return dx * this.slope + this.start.y;
  }

  hasPoint(givenPoint) {
    const { x, y } = givenPoint;
    const isXInRange = isNumInRange([this.start.x, this.end.x], x);
    const isYInRange = isNumInRange([this.start.y, this.end.y], y);
    return isXInRange && isYInRange;
  }
}

module.exports = Line;
