import sum from 'lodash/sum';

const timesTwo = (number)=> number * 2
const addFive = (number)=> sum([number, 5])

export {
  timesTwo,
  addFive
}