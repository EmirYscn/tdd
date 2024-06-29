function caesarCipher(string, shift) {
  let newStr = [];

  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charCodeAt(i);

    if (currentChar >= 65 && currentChar <= 90) {
      let shiftedChar = string.charCodeAt(i) + shift;
      if (shiftedChar > 90) {
        shiftedChar -= 26;
      } else if (shiftedChar < 65) {
        shiftedChar += 26;
      }
      newStr.push(String.fromCharCode(shiftedChar));
    } else if (currentChar >= 97 && currentChar <= 122) {
      let shiftedChar = string.charCodeAt(i) + shift;
      if (shiftedChar > 122) {
        shiftedChar -= 26;
      } else if (shiftedChar < 97) {
        shiftedChar += 26;
      }
      newStr.push(String.fromCharCode(shiftedChar));
    } else {
      newStr.push(string[i]);
    }
  }
  return newStr.join("");
}

module.exports = caesarCipher;
