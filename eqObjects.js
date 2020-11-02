const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')


const eqObjects = function (object1, object2) {
// Returns true if both objects have identical keys with identical values.
// Otherwise false
let keys1 = Object.keys(object1) // return keys1:  [ 'c', 'd' ]
let keys2 = Object.keys(object2) // return keys2: [ 'c', 'd' ]

if (keys1.length !== keys2.length) {
  return false
} else {
for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { 
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
      } else if (object1[key] !== object2[key]) {
        return false
      }
    } 
  } return true
}


// const cd = { c: "1", d: ["2", 3]};
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
// console.log(assertEqual(eqObjects(cd, cd2), false)); // => false

/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
console.log(assertEqual(eqObjects(cd, dc), true)); // => true*/

