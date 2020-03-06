function fizzBuzz(number){
  let value ="";

  if(number % 3 === 0){
    value += "Fizz";
  }
  if(number % 5 === 0){
    value += "Buzz";
  }
  if(!value){
    value = number.toString();
  }

  return value;
}

module.exports = fizzBuzz;