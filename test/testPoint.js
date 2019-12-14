const assert = require("chai").assert;
const Point = require("../src/point");

describe("Point", () => {
  describe("#toString()", function() {
    it("should give a text representation of the line", function() {
      const point = new Point(4, 8);
      const actualValue = point.toString();
      const expectedValue = "[Point @(4,8)]";
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

  describe("#clone()", function() {
    it("should give the a point with similar field values", function() {
      const point = new Point(4, 5);
      const actualValue = point.clone();
      const expectedValue = new Point(4, 5);
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });
});
