const numbersList = [];

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function father(a, b, callback) {
  const result = callback(a, b);
  numbersList.push(result);
}

father(5, 3, sum);
father(9, 31, sum);
father(9, 13, sum);
father(13, 3, sum);
father(10, 4, subtract);
father(15, 4, subtract);
father(10, 7, subtract);
father(12, 4, subtract);

console.log(numbersList);
