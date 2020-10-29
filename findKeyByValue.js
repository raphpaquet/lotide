const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚 Assertion Passed : ${actual} === ${expected}`)
  } else {
    console.log(`❌❌ Assertion failed : ${actual} !== ${expected}`)
  }
}; 

const findKeyByValue = function (obj, val) {
  let keys = Object.keys(obj); // ['sci_fi', 'comedy', 'drama']
  let result = '';
  for (let key of keys) {
    if (obj[key] === val) {
        result = key;
      }
    } return result;
  };

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // drama
  console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); // undefined
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 