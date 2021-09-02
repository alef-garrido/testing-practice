const capitalize = require('../capitalize')

  test('Should return first letter capitalized', () => {
    expect(capitalize('hello')).toMatch(/Hello/);
  });