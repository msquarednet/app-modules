var sum = require('lodash/sum');

var timesTwo = function(number) {
  return number * 2;
}
var addFive = function(number) {
  return sum([number, 5]);
}

module.exports = {
  timesTwo: timesTwo,
  addFive: addFive
}