function capitalize(str) {
  if (typeof str !== "string") {
    return "not string";
  }
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;
