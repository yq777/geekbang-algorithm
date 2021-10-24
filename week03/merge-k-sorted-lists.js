/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const merge = (lists, left, right)=> {
        if(left === right) {
            return lists[left];
        }
        if(left > right) {
            return null;
        }
        const mid = (left+right) >> 1;
        return mergeTwoList(merge(lists, left, mid), merge(lists, mid +1, right))
    }
    const mergeTwoList = (a, b) => {
        if(a==null || b== null) {
            return a ? a : b;
        }
        let head = new ListNode(0);
        let tail = head, aPar = a, bPar = b;
        while(aPar && bPar) {
            if(aPar.val < bPar.val) {
                tail.next = aPar;
                aPar = aPar.next;
            } else {
                tail.next = bPar;
                bPar = bPar.next;
            }
            tail = tail.next;
        }
        tail.next = aPar ? aPar: bPar;
        return head.next;
    }
    return merge(lists, 0, lists.length-1);
};