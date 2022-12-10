/*
 anArray.reduce((previous, current, index, array) => { ... return ... }, `firstValueForPrevious`)
 privious: is the value when sth is returning from the reduce function
 current: the current value of the anArray
 index: the index of current array
 array: the anArray itself
*/

// ==============================================================================

let sum = [1, 2, 3, 4, 5].reduce((prev, curr, index) => {
    return prev + curr;
}, 0);

console.log(sum);
// => sum : 1+2+3+4+5 = prev = 15
// the output is a Number as default value (0) is a Number

// ==============================================================================

// This is one example of reduce() function in javascript
/*
  We want to count unique elements in this array => let letters = ["a", "b", "c", "a", "b", "c", "a", "b", "a", "d"] 
  and make {a:4, b:3, c:2, d:1}
*/
let letters = ["a", "b", "c", "a", "b", "c", "a", "b", "a", "d"];
let countLetters = letters.reduce((prev, curr, index, array) => {
    if (curr in prev) {
        prev[curr]++;
    } else {
        prev[curr] = 1;
    }
    return prev;
}, new Object())

console.log(countLetters);