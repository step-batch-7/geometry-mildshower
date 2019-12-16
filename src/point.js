const arePointsEqual = function(point1, point2) {
  const areXsEqual = point1.x === point2.x;
  const areYsEqual = point1.y === point2.y;
  return areXsEqual && areYsEqual;
};

class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  visit(action) {
    return action(this.x, this.y);
  }

  isEqualTo(other) {
    return other instanceof Point && arePointsEqual(this, other);
  }

  findDistanceTo(other) {
    if (!(other instanceof Point)) return NaN;
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
