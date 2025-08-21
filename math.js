function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (0 === b) throw new Error("arshaidzleba");
  return a / b;
}
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
