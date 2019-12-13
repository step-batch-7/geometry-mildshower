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
});
