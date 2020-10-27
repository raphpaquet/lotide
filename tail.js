const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚 Assertion Passed : ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴 Assertion failed : ${actual} !== ${expected}`)
  }
};

assertEqual('Lighthouse Labs', 'Bootcamp')
assertEqual(1, 1);
assertEqual(1, 4);
assertEqual('Boot', 'Boot')



function tail(array) {
  return array.slice().splice(1, 2)
}; 


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); 