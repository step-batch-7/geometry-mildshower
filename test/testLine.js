const assert = require("chai").assert;
const Line = require("../src/line");

describe("#isEqual()", () => {
  it("should validate if equal lines are given", () => {
    const line1 = new Line(1, 2, 3, 4);
    const line2 = new Line(1, 2, 3, 4);
    assert.ok(line1.isEqual(line2));
  });

  it("should invalidate if unequal lines are given", () => {
    const line1 = new Line(1, 2, 3, 4);
    const line2 = new Line(5, 6, 7, 8);
    assert.notOk(line1.isEqual(line2));
  });
});

describe("#toString()", function() {
  it("should give the string representation of the line object", function() {
    const line = new Line(1, 2, 3, 4);
    const actualValue = line.toString();
    const expectedValue = "Line is from (1, 2) to (3, 4)";
    assert.strictEqual(actualValue, expectedValue);
  });
});
