const fizzBuzz = require('../main/FizzBuzz');

test('fizzBuzz should return the number if the parameter is not divisible by 3 and 5', () => {
  expect(fizzBuzz(4)).toBe(4);
});