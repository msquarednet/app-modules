sum = require 'lodash/sum'

timesTwo = (number)-> number * 2
addFive = (number)-> sum([number, 5])

module.exports =
  timesTwo: timesTwo
  addFive: addFive