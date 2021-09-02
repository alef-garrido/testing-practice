const String = require('./stringLength')

test('Cup should return 3', () => {
  expect(
    String.stringLength('cup'))
    .toBe(3)
})

test('Empty string should return error', () => {
  expect( () =>
    String.stringLength(''))
    .toThrow(Error);
})

test('String over 10 characters should return error', () => {
  expect( () =>
    String.stringLength('Honorificabilitudinitatibus'))
    .toThrow(Error);
})


