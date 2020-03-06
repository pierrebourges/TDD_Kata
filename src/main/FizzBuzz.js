function fizzBuzz(number){
  if(number % 3 !== 0 && number % 5 !== 0 ){
    return number.toString();
  }
  if(number % 3 === 0){
    return "Fizz";
  }
}

module.exports = fizzBuzz;