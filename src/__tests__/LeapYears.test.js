const leapYears = require('../main/LeapYears');

test('leapYears return true if the parameter is divisible by 400', () =>{
  expect(leapYears(400)).toBe(true);
});