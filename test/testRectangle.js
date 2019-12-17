const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("Rectangle", () => {
  describe("#notEditable", function() {
    it("vertices of the rectangle should not be editable", function() {
      const rectangle = new Rectangle({ x: 4, y: 5 }, { x: 8, y: 9 });
      rectangle.vertexA = new Point(2, 3);
      rectangle.vertexC = new Point(2, 3);
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

  describe("#area", function() {
    it("should calculate area when the area is a positive value", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 5 });
      assert.deepStrictEqual(rectangle.area, 12);
    });

    it("should calculate the area of a rectangle when the rectangle is a square(all edges same)", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      assert.deepStrictEqual(rectangle.area, 16);
    });

    it("should give 0 as area if the given diagonal is a horizontal line", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 1 });
      assert.deepStrictEqual(rectangle.area, 0);
    });

    it("should give 0 as area if the given diagonal is a vertical line", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 4 });
      assert.deepStrictEqual(rectangle.area, 0);
    });

    it("should give 0 as area if the given two points to create the rectangle are same", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.deepStrictEqual(rectangle.area, 0);
    });
  });

  describe("#perimeter", function() {
    it("should calculate the perimeter of a rectangle when the perimeter is positive", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 5 });
      assert.deepStrictEqual(rectangle.perimeter, 14);
    });

    it("should calculate the perimeter of a rectangle when the rectangle is a square(all edges same)", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      assert.deepStrictEqual(rectangle.perimeter, 16);
    });

    it("should give 0 as perimeter if the given two points to create the rectangle are same", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.deepStrictEqual(rectangle.perimeter, 0);
    });
  });

  describe("#isEqualTo()", function() {
    it("should validate if two rectangles are same and initial diagonals are same", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 5 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 5 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });

    it("should validate if two rectangles are same and initial diagonals are same but of opposite direction", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 5 });
      const rectangle2 = new Rectangle({ x: 4, y: 5 }, { x: 1, y: 1 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });

    it("should validate if two rectangles are same but initial diagonals are different", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 5 });
      const rectangle2 = new Rectangle({ x: 1, y: 5 }, { x: 4, y: 1 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });

    it("should invalidate if two rectangles are not same", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 5 });
      const rectangle2 = new Rectangle({ x: 0, y: 5 }, { x: 4, y: 1 });
      assert.notOk(rectangle1.isEqualTo(rectangle2));
    });

    it("should invalidate if given object is not a rectangle", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 5 });
      assert.notOk(
        rectangle1.isEqualTo({
          vertexA: new Point(1, 1),
          vertexC: new Point(4, 5)
        })
      );
    });
  });
});
