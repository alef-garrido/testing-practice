const reverseString = require('../reverseString')

test('Hey must be reversed', () => {
  expect(reverseString('hey')).toMatch(/yeh/)
})