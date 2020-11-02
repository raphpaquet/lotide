const tail = require('../tail');
const assertEqual = require('../assertEqual');



const words = ["Yo Yo", "Lighthouse", "Labs", 'hi', 'allo'];
console.log(tail(words)); 
assertEqual(words.length, 3);


const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); //ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); //ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); 