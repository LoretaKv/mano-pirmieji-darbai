function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = function () {
    return a + b;
  };
  this.substraction = function () {
    return a - b;
  };
  this.multiplication = function () {
    return a * b;
  };

  this.division = function () {
    return a / b;
  };
}

const myCalculations = new Calculator(9, 4);

console.log(myCalculations.substraction());
