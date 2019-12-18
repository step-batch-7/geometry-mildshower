const Point = require("./point");
const Line = require("./line");

const isNumInRangeExcluding = function(range, number) {
  const [lowerLim, higherLim] = range.sort((num1, num2) => num1 - num2);
  return lowerLim < number && higherLim > number;
};

const getVertexBandD = function(vertexA, vertexC) {
  return {
    vertexB: new Point(vertexA.x, vertexC.y),
    vertexD: new Point(vertexC.x, vertexA.y)
  };
};

const get2adjacentEdges = function(vertexA, vertexC) {
  const { vertexB } = getVertexBandD(vertexA, vertexC);
  return [new Line(vertexB, vertexA), new Line(vertexB, vertexC)];
};

class Rectangle {
  constructor(pointA, pointC) {
    this.vertexA = new Point(pointA.x, pointA.y);
    this.vertexC = new Point(pointC.x, pointC.y);
    Object.defineProperties(this, {
      vertexA: { writable: false },
      vertexC: { writable: false }
    });
  }

  toString() {
    const pointA = `(${this.vertexA.x},${this.vertexA.y})`;
    const pointC = `(${this.vertexC.x},${this.vertexC.y})`;
    return `[Rectangle ${pointA} to ${pointC}]`;
  }

  get area() {
    const [edge1, edge2] = get2adjacentEdges(this.vertexA, this.vertexC);
    return edge1.length * edge2.length;
  }

  get perimeter() {
    const [edge1, edge2] = get2adjacentEdges(this.vertexA, this.vertexC);
    return 2 * (edge1.length + edge2.length);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    const { vertexB, vertexD } = getVertexBandD(this.vertexA, this.vertexC);
    const diagonal1 = new Line(this.vertexA, this.vertexC);
    const diagonal2 = new Line(vertexB, vertexD);
    const diagonalToCheck = new Line(other.vertexA, other.vertexC);
    return (
      diagonal1.isEqualTo(diagonalToCheck) ||
      diagonal2.isEqualTo(diagonalToCheck)
    );
  }

  hasPoint(other) {
    const [edge1, edge2] = get2adjacentEdges(this.vertexA, this.vertexC);
    const [edge3, edge4] = get2adjacentEdges(this.vertexC, this.vertexA);
    return (
      edge1.hasPoint(other) ||
      edge2.hasPoint(other) ||
      edge3.hasPoint(other) ||
      edge4.hasPoint(other)
    );
  }

  covers(other) {
    return (
      other instanceof Point &&
      isNumInRangeExcluding([this.vertexA.x, this.vertexC.x], other.x) &&
      isNumInRangeExcluding([this.vertexA.y, this.vertexC.y], other.y)
    );
  }
}

module.exports = Rectangle;
