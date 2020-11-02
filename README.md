# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @raphpaquet/lotide`

**Require it:**

`const _ = require('@raphpaquet/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual`: compares two arrays & weather they are equal or not it will print if the assertion has passed or failed.
* `assertEqual`: compares two primitive values & weather they are equal or not it will print if the assertion has passed or failed.
* `countLetter`: counts the number of letters in a string. 
* `eqArrays`: compares two arrays and prints true of false, wheater they are equal or not.
* `eqObjects`: compares two objects and prints true of false, wheater they are equal or not.
* `findKey`: takes an object(arg1) and with the callback function(arg2) will return the first key for which the callback returns a truthy value. If no key is found, returns undefined.
* `findKeyByValue`: takes an object and a value. Scan the object and returns the first key that contains the given value. If no key is found, returns undefined 
* `head`: prints the first index of an array.
* `letterPositions`: takes a string and returns an object in which each letter of the string is a key and their values are their position(index) in the string.
* `map`: takes an array(arg1) and return a new array based on the results of the callback function(arg2)
* `middle`: takes an array and returns the middle item if the array length is odd and 2 items if the length is even.
* `tail`: takes an array and prints it back except for the value at index 0.
* `takeUntil`: takes an array and return just a part of the array until the callback function returns a truthy value.
* `without`: takes 2 arrays and return an array with the item(s) of the first array that are not found in the second array. 