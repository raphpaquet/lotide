const assertEqual = require('./assertEqual')


const countLetters = function(string) {
const result = {};
  for (let i of string) {
    if(result[i]) {
      result[i] += 1; 
    } else if (i !== ' ') {
      result[i] = 1
    }
  } return result; 
};

const expected =  {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}


module.exports = countLetters;
// let objectLetters = countLetters('lighthouse in the house')
// console.log(assertEqual(objectLetters['t'], expected['t']))