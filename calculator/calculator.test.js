const calculator = require("./calculator");

test("add two numbers", () => {
  expect(calculator.add(6, 2)).toBe(8);
});
test("subtract two numbers", () => {
  expect(calculator.subtract(6, 2)).toBe(4);
});
test("multiply two numbers", () => {
  expect(calculator.multiply(6, 2)).toBe(12);
});
test("divide two numbers", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
