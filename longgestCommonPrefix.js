// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// ==============================================> SOLUTION <===================================================

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let i = 1;
    let prev = strs[0]
    while (i < strs.length) {
        let temp = ""
        let k = 0;
        while (prev[k] == strs[i][k] && k < prev.length && k < strs[i].length) {
            temp = temp + prev[k]
            k++
        }
        i++;
        prev = temp
    }
    return prev
};