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
      assert.notEqual(actualValue, expectedValue);
    });
  });

  describe("#visit()", function() {
    it("should give the result of the given function called with x and y of the point", function() {
      const point = new Point(3, 4);
      const sum = function(x, y) {
        assert.strictEqual(x, 3);
        assert.strictEqual(y, 4);
        return x + y;
      };
      const actualValue = point.visit(sum);
      const expectedValue = 7;
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });
});
