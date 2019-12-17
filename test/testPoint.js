const assert = require("chai").assert;
const Point = require("../src/point");
const Line = require("../src/line");
const Circle = require("../src/circle");

describe("Point", () => {
  describe("#notEditable", function() {
    it("co-ordinates of the point should not be editable", function() {
      const point = new Point(4, 5);
      point.x = 45;
      point.y = 454;
      const actualValue = point;
      const expectedValue = new Point(4, 5);
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

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

  describe("#isEqualTo()", function() {
    it("should validate if co-ordinates of both points are equal", function() {
      const point1 = new Point(4, 7);
      const point2 = new Point(4, 7);
      assert.ok(point1.isEqualTo(point2));
    });

    it("should invalidate if co-ordinates of both points are not equal", function() {
      const point1 = new Point(4, 7);
      const point2 = new Point(1, 9);
      assert.notOk(point1.isEqualTo(point2));
    });

    it("should invalidate passed object is not a point", function() {
      const point1 = new Point(4, 7);
      assert.notOk(point1.isEqualTo({ x: 4, y: 7 }));
    });
  });

  describe("#findDistanceTo()", function() {
    it("should give distance between the two points when distance is more than 0", function() {
      const point1 = new Point(1, 1);
      const point2 = new Point(4, 5);
      const actualValue = point1.findDistanceTo(point2);
      const expectedValue = 5;
      assert.deepStrictEqual(actualValue, expectedValue);
    });

    it("should give distance between the two points when distance is 0", function() {
      const point1 = new Point(1, 1);
      const point2 = new Point(1, 1);
      const actualValue = point1.findDistanceTo(point2);
      const expectedValue = 0;
      assert.deepStrictEqual(actualValue, expectedValue);
    });

    it("should give NaN if the given point is not a point instance", function() {
      const point = new Point(1, 1);
      assert.isNaN(point.findDistanceTo({ x: 2, y: 6 }));
    });

    it("should give decimal number as distance also", function() {
      const point1 = new Point(1, 2);
      const point2 = new Point(3, 11.9);
      const actualValue = point1.findDistanceTo(point2);
      const expectedValue = 10.1;
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

  describe("#isOn()", function() {
    it("should validate if a line is given and the point is on the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 10, y: 10 });
      const point = new Point(5, 5);
      assert.ok(point.isOn(line));
    });

    it("should invalidate if a line is given but the point is not on the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 10, y: 10 });
      const point = new Point(5, 6);
      assert.notOk(point.isOn(line));
    });

    it("should validate if a circle is given and the point is on the circle", function() {
      const circle = new Circle({ x: 1, y: 1 }, 5);
      const point = new Point(4, 5);
      assert.ok(point.isOn(circle));
    });

    it("should invalidate if a circle is given but the point is not on the circle", function() {
      const circle = new Circle({ x: 1, y: 1 }, 5);
      const point = new Point(5, 5);
      assert.notOk(point.isOn(circle));
    });

    it("should throw an error if a object is given that does not have hasPoint() method", function() {
      const point = new Point(5, 6);
      const otherObj = { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } };
      assert.throws(() => {
        point.isOn(otherObj);
      });
    });
  });
});
