const assert = require("chai").assert;
const Line = require("../src/line");

describe("Line", () => {
  describe("#isEqual()", () => {
    it("should validate if equal lines are given", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(line2));
    });

    it("should invalidate if lines of unequal start points are given", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 5, y: 6 }, { x: 3, y: 4 });
      assert.notOk(line1.isEqualTo(line2));
    });

    it("should invalidate if lines of unequal end points are given", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 7, y: 8 });
      assert.notOk(line1.isEqualTo(line2));
    });

    it("should invalidate if a object is given that is not an instance of Line class", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.notOk(
        line1.isEqualTo({ start: { x: 1, y: 2 }, end: { x: 3, y: 4 } })
      );
    });
  });

  describe("#toString()", function() {
    it("should give the string representation of the line object", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actualValue = line.toString();
      const expectedValue = "Line: (1, 2) to (3, 4)";
      assert.strictEqual(actualValue, expectedValue);
    });
  });

  describe("#length", function() {
    it("should calculate length for a line whose start and end are not same", function() {
      const line = new Line({ x: 5, y: 1 }, { x: 2, y: 5 });
      const actualValue = line.length;
      const expectedValue = 5;
      assert.strictEqual(actualValue, expectedValue);
    });

    it("should give 0 as length for a line whose start and end points are same", function() {
      const line = new Line({ x: 5, y: 1 }, { x: 5, y: 1 });
      const actualValue = line.length;
      const expectedValue = 0;
      assert.deepStrictEqual(actualValue, expectedValue);
    });

    it("should give length for a line that has negative co-ordinates as any end point", function() {
      const line = new Line({ x: -1, y: -2 }, { x: 3, y: 1 });
      const actualValue = line.length;
      const expectedValue = 5;
      assert.deepStrictEqual(actualValue, expectedValue);
    });

    it("should give length for a line whose both end points are negative", function() {
      const line = new Line({ x: -1, y: -2 }, { x: -5, y: -5 });
      const actualValue = line.length;
      const expectedValue = 5;
      assert.deepStrictEqual(actualValue, expectedValue);
    });

    it("should calculate decimal length also", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 11.9 });
      const actualValue = line.length;
      const expectedValue = 10.1;
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

  describe("#isParallelTo()", function() {
    it("should validate if two lines are parallel", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const line2 = new Line({ x: -2, y: 5 }, { x: -1, y: 6 });
      assert.ok(line1.isParallelTo(line2));
    });

    it("should invalidate if two lines are not parallel", function() {
      const line1 = new Line({ x: 1, y: 6 }, { x: 2, y: 3 });
      const line2 = new Line({ x: -2, y: 10 }, { x: -9, y: 6 });
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should invalidate if anything other that line is compared with line", function() {
      const line1 = new Line({ x: 1, y: 6 }, { x: 2, y: 3 });
      assert.notOk(
        line1.isParallelTo({ start: { x: -2, y: 5 }, end: { x: -1, y: 6 } })
      );
    });

    it("should invalidate if two lines with of length 0 are compared", function() {
      const line1 = new Line({ x: 1, y: 6 }, { x: 1, y: 6 });
      const line2 = new Line({ x: -2, y: 10 }, { x: -2, y: 10 });
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should validate if two lines are overlapping", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 0, y: 1 }, { x: 3, y: 4 });
      assert.ok(line1.isParallelTo(line2));
    });
  });

  describe("#slope", function() {
    it("should calculate positive slope if end points of the line are different", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 2, y: 2 });
      const actualValue = line.slope;
      const expectedValue = 1;
      assert.strictEqual(actualValue, expectedValue);
    });

    it("should calculate negative slope if end points of the line are different", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 0, y: 2 });
      const actualValue = line.slope;
      const expectedValue = -1;
      assert.strictEqual(actualValue, expectedValue);
    });

    it("should NaN as a number if end points of the line are same", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.isNaN(line.slope);
    });

    it("should give 0 as slope when line is parallel to x-axis", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 2, y: 1 });
      const actualValue = line.slope;
      const expectedValue = 0;
      assert.strictEqual(actualValue, expectedValue);
    });

    it("should give Infinity as slope when line is parallel to y-axis", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 1 });
      const actualValue = line.slope;
      const expectedValue = Infinity;
      assert.strictEqual(actualValue, expectedValue);
    });
  });

  describe("#findX()", function() {
    it("should give x value for the given y if the y value has a corresponding x value on line", function() {
      const line = new Line({ x: -1, y: 3 }, { x: 3, y: -1 });
      const actualValue = line.findX(1);
      const expectedValue = 1;
      assert.strictEqual(actualValue, expectedValue);
    });

    it("should give undefined if given y does not have a corresponding x value on line", function() {
      const line = new Line({ x: -1, y: 3 }, { x: 3, y: -1 });
      const actualValue = line.findX(4);
      const expectedValue = undefined;
      assert.strictEqual(actualValue, expectedValue);
    });
  });
});
