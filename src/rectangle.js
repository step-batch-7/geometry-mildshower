const Point = require("./point");
const Line = require("./line");

const getVertexBandD = function(vertexA, vertexC) {
  return {
    vertexB: new Point(vertexA.x, vertexC.y),
    vertexD: new Point(vertexC.x, vertexA.y)
  };
};

const get2adjacentEdges = function(vertexA, vertexC) {
  const { vertexB } = getVertexBandD(vertexA, vertexC);
  return [vertexB.findDistanceTo(vertexA), vertexB.findDistanceTo(vertexC)];
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
    return edge1 * edge2;
  }

  get perimeter() {
    const [edge1, edge2] = get2adjacentEdges(this.vertexA, this.vertexC);
    return 2 * (edge1 + edge2);
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
}

module.exports = Rectangle;
