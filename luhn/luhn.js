const isValid = (input) => {
  // This removes the spaces and g flags to replace all occurences
  const inputStr = input.replace(/\s/g, '');
  // If the length of the string is less than or equal to one OR
  // not a number return false.  Test #1, 6
  if (inputStr.length <= 1 || isNaN(inputStr)) {
    return false;
  }

  // Declare a sum with the value for zero to have an available variable
  // in which to work with and change.
  let sum = 0;
  // ForEach loop used to pull every other second digit and then
  // first variable is my counter, starts the counter at zero.
  // How many times will you run the loop, in this case I am running
  // this until the statement is true.
  // At the end of the loop add by one, incementing.
  for (let i = 0; i < inputStr.length; i += 1) {
    // This portion once it hits the end it pulls from every second.
    if ((i - inputStr.length) % 2 === 0) {
      let double = inputStr[i] * 2;
      if (double > 9) {
        double -= 9;
      }
      sum += (double * 1);
    } else {
      sum += (inputStr[i] * 1);
    }
  }
  return (sum % 10 === 0);
};

// Module/class function with a self method
const Luhn = function Luhn(input) {
  this.valid = isValid(input);
};

module.exports = Luhn;
