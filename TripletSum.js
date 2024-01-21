// Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
 
// Example 1:

// Input: 
// N = 4 
// arr[] = {1, 5, 3, 2}
// Output: 2 
// Explanation: There are 2 triplets:
//  1 + 2 = 3 and 3 +2 = 5

// Example 2:

// Input: 
// N = 3
// arr[] = {2, 3, 4}
// Output: 0
// Explanation: No such triplet exits
// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function countTriplet() which takes the array arr[] and N as inputs and returns the triplet count

// Expected Time Complexity: O(N2)
// Expected Auxiliary Space: O(1)


// ==============================================> SOLUTION <===================================================

class Solution {
    
    countTriplet(arr,n){
        let ans=0;
        let mp=new Map();
        for(let i=0; i<arr.length;i++){
            mp.set(arr[i],i)
        }
        
        for(let i=0;i<arr.length; i++){
            for (let j=i+1;j<arr.length ;j++){
                let sm=arr[i]+arr[j]
                if(mp.has(sm)){
                    ans++;
                }
            }
        }
        return ans;
    }
}