const assertEqual = require('./assertEqual')

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let name of firstNames) {
    if(itemsToCount[name]) {
      if (results[name]) {
        results[name]++
      } else {
        results[name] = 1
      }
    }
  } return results;
} 


module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// console.log(countOnly(firstNames, {}))

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// console.log(assertEqual(result1["Jason"], 1));
// console.log(assertEqual(result1["Karima"], undefined));
// console.log(assertEqual(result1["Fang"], 2));
// console.log(assertEqual(result1["Agouhanna"], undefined));