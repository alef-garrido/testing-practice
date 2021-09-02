const stringLength = require('../stringLength')

test('Cup should return 3', () => {
  expect(
    stringLength('cup'))
    .toBe(3)
})

test('Empty string should return error', () => {
  expect( () =>
   stringLength(''))
    .toThrow(Error);
})

test('String over 10 characters should return error', () => {
  expect( () =>
   stringLength('Honorificabilitudinitatibus'))
    .toThrow(Error);
})


