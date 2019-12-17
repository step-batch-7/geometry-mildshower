const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("Rectangle", () => {
  describe("#notEditable", function() {
    it("vertices of the rectangle should not be editable", function() {
      const rectangle = new Rectangle({ x: 4, y: 5 }, { x: 8, y: 9 });
      rectangle.vertexA = new Point(2, 3);
      rectangle.vertexB = new Point(2, 3);
      rectangle.vertexC = new Point(2, 3);
      rectangle.vertexD = new Point(2, 3);
      const expectedValue = new Rectangle({ x: 4, y: 5 }, { x: 8, y: 9 });
      assert.deepStrictEqual(rectangle, expectedValue);
    });
  });

  describe("#toString()", function() {
    it("should give the line representation of the Rectangle object", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actualValue = rectangle.toString();
      const expectedValue = "[Rectangle (1,1) to (5,4)]";
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });
});
