const Point = require("./point");

const arePointsEqual = function(point1, point2) {
  const areXsEqual = point1.x === point2.x;
  const areYsEqual = point1.y === point2.y;
  return areXsEqual && areYsEqual;
};

const isNumInRange = function(range, number) {
  const [lowerLim, higherLim] = range.sort((num1, num2) => num1 - num2);
  return lowerLim <= number && higherLim >= number;
};

const arePointsCollinear = function(pointA, pointB, pointC) {
  const [x1, y1] = [pointA.x, pointA.y];
  const [x2, y2] = [pointB.x, pointB.y];
  const [x3, y3] = [pointC.x, pointC.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
};

class Line {
  constructor(start, end) {
    this.start = new Point(start.x, start.y);
    this.end = new Point(end.x, end.y);
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      (arePointsEqual(this.start, other.start) &&
        arePointsEqual(this.end, other.end)) ||
      (arePointsEqual(this.start, other.end) &&
        arePointsEqual(this.end, other.start))
    );
  }

  toString() {
    const start = `(${this.start.x},${this.start.y})`;
    const end = `(${this.end.x},${this.end.y})`;
    return `[Line ${start} to ${end}]`;
  }

  get length() {
    return this.start.findDistanceTo(this.end);
  }

  get slope() {
    const dx = this.start.x - this.end.x;
    const dy = this.start.y - this.end.y;
    const slope = dy / dx;
    return slope == -Infinity ? Infinity : slope;
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    const areSlopesSame = this.slope === other.slope;
    return (
      areSlopesSame && !arePointsCollinear(this.start, this.end, other.start)
    );
  }

  findX(y) {
    if (!isNumInRange([this.start.y, this.end.y], y)) return NaN;
    if (this.slope == 0) return this.start.x;
    const dy = y - this.start.y;
    return dy / this.slope + this.start.x;
  }

  findY(x) {
    if (!isNumInRange([this.start.x, this.end.x], x)) return NaN;
    if (this.slope === Infinity) return this.start.y;
    const dx = x - this.start.x;
    return dx * this.slope + this.start.y;
  }

  hasPoint(other) {
    return (
      other instanceof Point &&
      (other.x === this.findX(other.y) || other.y === this.findY(other.x))
    );
  }

  split() {
    const midX = (this.start.x + this.end.x) / 2;
    const midY = (this.start.y + this.end.y) / 2;
    const midPoint = { x: midX, y: midY };
    return [new Line(this.start, midPoint), new Line(midPoint, this.end)];
  }

  findPointFromStart(distance) {
    if (distance < 0 || distance > this.length) return NaN;
    const distanceRatio = distance / this.length;
    const x = (1 - distanceRatio) * this.start.x + distanceRatio * this.end.x;
    const y = (1 - distanceRatio) * this.start.y + distanceRatio * this.end.y;
    return new Point(x, y);
  }
}

module.exports = Line;
