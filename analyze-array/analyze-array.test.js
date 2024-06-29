const analyzeArray = require("./analyze-array");

test("takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
  expect(analyzeArray([2, 8, 3, 4, 1, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("array includes non number type", () => {
  expect(analyzeArray([2, 8, 3, 4, "A", 1, 6])).toBe(
    "The array includes non number type"
  );
});
