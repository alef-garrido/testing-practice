const Calculator = require('../calculator')

describe('Calculator tests', () => {
  describe('Sum', () => {
    test('adding 4 + 7 should return 11', () => {
      expect(Calculator.add(4, 7)).toBe(11);
    });

    test('adding 0 + 1 should return 1', () => {
      expect(Calculator.add(0, 1)).toBe(1);
    });

    test('String input should return error', () => {
      expect(() => Calculator.add('f')).toThrow(Error);
    })
  });

  describe('Substraction', () => {
    test('substract 1 - 1 should return 0', () => {
      expect(Calculator.substract(1, 1)).toBe(0);
    });

    test('substract 0 - 1 should be -1', () => {
      expect(Calculator.substract(0, 1)).toBe(-1);
    });

    test('String input should return Error', () => {
      expect(() => Calculator.substract('c')).toThrow(Error);
    })
  });

  describe('Multiplication', () => {
    test('multiplying 4 * 5 should be 20', () => {
      expect(Calculator.multiply(4, 5)).toBe(20);
    });

    test('multiplying 0 * 2 should be 0', () => {
      expect(Calculator.multiply(0, 2)).toBe(0);
    });

    test('String input should return Error', () => {
      expect(() => Calculator.multiply('b')).toThrow(Error);
    })
  });

  describe('Division', () => {
    test('divide 7 / 7 should be 1', () => {
      expect(Calculator.divide(7, 7)).toBe(1);
    });

    test('divide 9 / 0 should return Error', () => {
      expect(() => Calculator.divide(5, 0)).toThrow(Error);
    });

    test('String input should return Error', () => {
      expect(() => Calculator.divide('a')).toThrow(Error);
    })
  });
})