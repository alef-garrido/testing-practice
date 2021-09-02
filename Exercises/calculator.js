class Calculator {
  static add (a, b) {
    this.validateInput(a, b);
    return a + b;
  }

  static substract(a, b) {
    this.validateInput(a, b);
    return a - b;
  }

  static multiply(a, b) {
    this.validateInput(a, b);
    return a * b;
  }

  static divide(a, b) {
    this.validateInput(a, b);
    this.zeroDivisionValidation(b);
    return a / b;
  }

   static validateInput = (...values) => {
    values.forEach((num) => {
      if(typeof num !== 'number') {
        throw new Error('Only numbers allowed')
      }
    });
  }

  static zeroDivisionValidation = (b) => {
    if(b === 0) {
      throw new Error('No Zero division');
    }
  }
}

module.exports = Calculator