// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106


// ==============================================> SOLUTION <===================================================

// * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */

var findMedianSortedArrays = function (nums1, nums2) {

    let merged = [...nums1, ...nums2]
    const compare = (a, b) => {
        return a - b;
    }
    const final = merged.sort(compare)
    let midIndex = Math.floor(final?.length / 2)
    if (final?.length % 2 == 0) {

        return (final[midIndex] + final[midIndex - 1]) / 2
    }
    else {
        return final[midIndex]
    }
};


// ======= ANOTHER SOLUTION ====

var findMedianSortedArrays = function (nums1, nums2) {

    let final = []
    let i = 0;
    let j = 0;

    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] <= nums2[j] && i < nums1.length && j < nums2.length) {
            final.push(nums1[i])
            i++;
        }
        else if (nums1[i] >= nums2[j] && j < nums2.length && i < nums1.length) {
            final.push(nums2[j])
            j++;
        }
        else if (i < nums1.length && j >= nums2.length) {
            final.push(nums1[i])
            i++;
        }
        else if (j < nums2.length && i >= nums1.length) {
            final.push(nums2[j])
            j++
        }
    }
    let midIndex = Math.floor(final?.length / 2)
    if (final?.length % 2 == 0) {

        return (final[midIndex] + final[midIndex - 1]) / 2
    }
    else {
        return final[midIndex]
    }
};




