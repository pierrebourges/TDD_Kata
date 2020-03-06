const isleapYears = require('../main/LeapYears');

test('leapYears return true if the parameter is divisible by 400', () =>{
  expect(isleapYears(400)).toBe(true);
});

test('leapYears return false if the parameter is not divisible by 400', () =>{
  expect(isleapYears(666)).toBe(false);
});

test('leapYears return false if the parameter is not divisible by 100 but not by 400', () =>{
  expect(isleapYears(100)).toBe(false);
});