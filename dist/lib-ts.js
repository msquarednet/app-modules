"use strict";
/// <reference path="lodash.d.ts" />
var _ = require('lodash');
var timesTwo = function (value) { return value * 2; };
var addFive = function (value) { return _.sum([value, 5]); };
module.exports = {
    timesTwo: timesTwo,
    addFive: addFive
};
