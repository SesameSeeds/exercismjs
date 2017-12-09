const Gigasecond = function gs(date) {
  this.anniversaryDate = date;
};

Gigasecond.prototype.date = function expDate() {
  return new Date(this.anniversaryDate.getTime() + (1000000000 * 1000));
};

module.exports = Gigasecond;

// Model (like a class) is exported as a module and exposes a date function.
// the date parameter is assigned to an instance variable so my date function
// can use it.
//
// Calling the function returns a new date object based on instatiated
// date/time + (1000000000 * 1000).
//
// Results in gigasecond of instatiated date/time

// All JavaScript objects inherit the properties and methods from their
// prototype. Objects created using an object literal, or with new Object(),
// inherit from a prototype called Object.prototype. Objects created with
// new Date() inherit the Date.prototype. The Object.prototype is on the top of
// the prototype chain
