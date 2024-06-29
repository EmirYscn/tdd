function analyzeArray(array) {
  if (hasNonNumber(array)) {
    return "The array includes non number type";
  }
  const object = {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };

  return object;
}

function getAverage(array) {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total / array.length;
}

function getMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }
  return min;
}

function getMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }

  return max;
}

function hasNonNumber(arr) {
  return arr.some((element) => typeof element !== "number");
}

module.exports = analyzeArray;
