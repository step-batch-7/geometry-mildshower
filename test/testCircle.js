const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

describe("Circle", () => {
  describe("#notEditable", function() {
    it("center and radius of the circle should not be editable", function() {
      const circle = new Circle({ x: 4, y: 5 }, 5);
      circle.center = new Point(2, 3);
      circle.radius = 56;
      const actualValue = circle;
      const expectedValue = new Circle({ x: 4, y: 5 }, 5);
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

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

  describe("#area", function() {
    it("should calculate the area of a circle if the circle's area is more than 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 3);
      const actualValue = Math.round(circle.area);
      const expectedValue = 28;
      assert.deepStrictEqual(actualValue, expectedValue);
    });

    it("should give 0 as area if the circle's radius is 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      const actualValue = circle.area;
      const expectedValue = 0;
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

  describe("#perimeter", function() {
    it("should calculate the perimeter of a circle if the circle's perimeter is more than 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 3);
      const actualValue = Math.round(circle.perimeter);
      const expectedValue = 19;
      assert.strictEqual(actualValue, expectedValue);
    });

    it("should 0 as perimeter if the circle's perimeter is 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      const actualValue = circle.perimeter;
      const expectedValue = 0;
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

  describe("#hasPoint()", function() {
    it("should validate if the given point is on the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(3, 4);
      assert.ok(circle.hasPoint(point));
    });

    it("should invalidate if the given point is not on the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(4, 4);
      assert.notOk(circle.hasPoint(point));
    });

    it("should invalidate if the given obj is not a point", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.notOk(circle.hasPoint({ x: 3, y: 4 }));
    });
  });
});
