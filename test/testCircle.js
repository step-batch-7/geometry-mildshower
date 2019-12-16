const assert = require("chai").assert;
const Circle = require("../src/circle");

describe("Circle", () => {
  describe("#toString()", function() {
    it("should give string representation of the circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 3);
      const actualValue = circle.toString();
      const expectedValue = "[Circle @(1,2) radius 3]";
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

  describe("#isEqualTo()", function() {
    it("should validate if two circles are have same center and same radius", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 1, y: 2 }, 3);
      assert.ok(circle1.isEqualTo(circle2));
    });

    it("should invalidate if two circles are have same center but different radius", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      assert.notOk(circle1.isEqualTo(circle2));
    });

    it("should invalidate if two circles are have different center and same radius", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 1, y: 1 }, 3);
      assert.notOk(circle1.isEqualTo(circle2));
    });

    it("should invalidate if given object is not a circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 3);
      assert.notOk(circle.isEqualTo({ center: { x: 1, y: 2 }, radius: 3 }));
    });
  });
});
