const isleapYears = require('../main/LeapYears');

test('leapYears return true if the parameter is divisible by 400', () =>{
  expect(isleapYears(400)).toBe(true);
});