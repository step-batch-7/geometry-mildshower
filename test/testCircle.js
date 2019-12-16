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
});
