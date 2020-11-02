const assertEqual = require('./assertEqual');

const findKeyByValue = function (obj, val) {
  for (let key in obj) {
    if(obj[key] === val) {
      return key;
    }
  }
};


module.exports = findKeyByValue;
  // const bestTVShowsByGenre = {
  //   sci_fi: "The Expanse",
  //   comedy: "Brooklyn Nine-Nine",
  //   drama: "The Wire"
  // };

//   console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // drama
//   console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); // undefined
// // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 