// 2816. Double a Number Represented as a Linked List
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

// Return the head of the linked list after doubling it.

 

// Example 1:


// Input: head = [1,8,9]
// Output: [3,7,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.
// Example 2:


// Input: head = [9,9,9]
// Output: [1,9,9,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998. 
 

// Constraints:

// The number of nodes in the list is in the range [1, 104]
// 0 <= Node.val <= 9
// The input is generated such that the list represents a number that does not have leading zeros, except the number 0 itself.

// ==============================================> SOLUTION <===================================================


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
    let i = 0
    let node = head
    while (node != null) {
        let nextCarry = 0
        if (node.next != null) {
            nextCarry = Math.trunc((node.next.val * 2) / 10)
        }
        if (i == 0 && node.val*2 + nextCarry >= 10) {
            let newHead = new ListNode(1)
            head = newHead
            newHead.next = node

        }
        node.val = (node.val * 2 + nextCarry) % 10
        node = node.next
        i++
    }
    return head
};