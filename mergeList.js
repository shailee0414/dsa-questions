// 21. Merge Two Sorted Lists
// Solved
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// ==============================================> SOLUTION <===================================================


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return list1
    if (!list1 || !list2) return list1 || list2
    let ans;
    let curr;
    if (list1 && list2) {
        if (list1.val <= list2.val) {
            ans = new ListNode(list1.val)
            curr = ans
            list1 = list1.next
        }
        else {
            ans = new ListNode(list2.val)
            curr = ans
            list2 = list2.next
        }
    }

    while (list1 && list2) {
        if (list1?.val <= list2?.val) {
            curr.next = list1
            curr = curr.next
            list1 = list1.next
        }
        else if (list1?.val >= list2?.val) {
            curr.next = list2
            curr = curr.next
            list2 = list2.next
        }

    }

    if (!list1) {

        curr.next = list2

    }
    else {

        curr.next = list1

    }
    return ans
};