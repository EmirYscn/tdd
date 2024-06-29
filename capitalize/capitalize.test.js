const capitalize = require("./capitalize");

test("capitalize the string (1)", () => {
  expect(capitalize("emir")).toBe("Emir");
});

test("capitalize the string (2)", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("check if input is string (type = number)", () => {
  expect(capitalize(13)).toBe("not string");
});

test("check if input is string (type = boolean)", () => {
  expect(capitalize(true)).toBe("not string");
});
