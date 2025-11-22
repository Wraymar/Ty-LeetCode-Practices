/**
 * @param {string} s
 * @return {number}
 */


/*
Create an object that store the key-value pairs of the Symbols and their values.

Edge cases:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Example:

s = "III"

Check the object to see if a key matches s[i]

create a variable to store the sum

if key exist we add the value to our sum

repeat steps and return final sum

Solving edge case:

When a smaller number appears before a larger number then we subtract instead of add

*/
var romanToInt = function(s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

let sum = 0;

//if curr > next then we add curr to the sum
//if next > curr then we subtract curr from the sum
for(let i = 0; i < s.length; i++) {
    let curr = map.get(s[i]);
    let next = i + 1 < s.length ? map.get(s[i + 1]) : 0;
    if(curr < next) {
        sum -= curr
    }else {
        sum += curr
    }
}
    return sum
};