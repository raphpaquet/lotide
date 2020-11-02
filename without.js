const assertArraysEqual = require('./assertArraysEqual');


 const without = function(source, itemsToRemove) {
   let newArr = source;
     for (let item of itemsToRemove) {
       if(newArr.includes(item)) {
        newArr.splice(newArr.indexOf(item), 1)
       }
   } return newArr;
 };


module.exports = without;

// console.log(without([2, 3, 1], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]