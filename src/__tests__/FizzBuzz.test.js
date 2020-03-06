const fizzBuzz = require('../main/FizzBuzz');

test('fizzBuzz should return the number if the parameter is not divisible by 3 and 5', () => {
  expect(fizzBuzz(1)).toBe("1");
});

test('fizzBuzz should return "Fizz" if the parameter is divisible by 3', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

test('fizzBuzz should return "Buzz" if the parameter is divisible by 5', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});