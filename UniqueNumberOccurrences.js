// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// ==============================================> SOLUTION <===================================================

var uniqueOccurrences = function (arr) {

    var indexMap = new Map();

    arr.forEach(ele => {
        if (indexMap.has(ele)) {
            indexMap.set(ele, indexMap.get(ele) + 1)
        }
        else {
            indexMap.set(ele, 1)
        }
    })
    var indMap = new Map();
    for (const [key, val] of indexMap) {
        if (indMap.has(val)) {
            return false;
        }
        else {
            indMap.set(val, "unique")
        }
    }
    return true;
};