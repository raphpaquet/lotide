const assertEqual = require('./assertEqual')


const tail = function(array) {
  let newArr = [];
  newArr.push(array.slice(1));
  return console.log(newArr)
}; 




module.exports = tail;

