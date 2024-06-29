const caesarCipher = require("./caesar-cipher");

test("Shift the given string by (1)", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Shift the given string by (2)", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});
test("The shifted lettercase follows the original lettercase. ", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Punctuations, spaces, and other non-alphabetical characters remains unchanged.", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("wrappes from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("wrappes from Z to A", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("wrappes from a to z when negative shift value is given", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("wrappes from A to Z when negative shift value is given", () => {
  expect(caesarCipher("ABC", -3)).toBe("XYZ");
});

test("random (1)", () => {
  expect(caesarCipher("XxYyZz", 3)).toBe("AaBbCc");
});

test("random (2)", () => {
  expect(caesarCipher("AaBbCc", -3)).toBe("XxYyZz");
});

test("random (3)", () => {
  expect(caesarCipher("XxYyZz, abc!", 3)).toBe("AaBbCc, def!");
});

test("random (4)", () => {
  expect(caesarCipher("AaBbCc, xyzF!", -3)).toBe("XxYyZz, uvwC!");
});

test("random (3)", () => {
  expect(caesarCipher("XxYyZz, abc!123,", 3)).toBe("AaBbCc, def!123,");
});
