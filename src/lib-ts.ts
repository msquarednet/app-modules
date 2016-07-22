/// <reference path="lodash.d.ts" />
import * as _ from 'lodash';

const timesTwo = (value: number)=> value * 2
const addFive = (value: number)=> _.sum([value, 5])

export = {
  timesTwo,
  addFive
}