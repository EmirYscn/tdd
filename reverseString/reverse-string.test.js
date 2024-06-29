const reverseString = require("./reverse-string");

test("Reverse the given string (1)", () => {
  expect(reverseString("emir")).toBe("rime");
});

test("Reverse the given string (2)", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
