const operacion1 = (a = 10, b = 5) => {
  return a + b;
};
console.log(operacion1());
const operacion2 = (a = 10, b = 5) => {
  return a + b;
};
console.log(operacion2(12));

const operacion3 = (a = 10, b = 5) => {
  return a + b;
};
console.log(operacion3(12, 9));
