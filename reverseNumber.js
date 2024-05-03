// 7. Reverse Integer
// Solved
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

// ==============================================> SOLUTION <===================================================

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    
    let ans = 0;
    let sign = x > 0 ? 1 : -1;
    x = Math.abs(x)
    while (x > 0) {
        let modulo = x % 10
        x = Math.trunc(x / 10)
        ans += modulo
        if (x > 0) {
            ans = ans * 10
        }

    }
    if (ans >= 2147483647 || ans <= -2147483648) return 0
    return ans * sign

};