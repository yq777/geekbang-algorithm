/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 思路：利用递归解决问题
 * 1、两个都没值那么是null
 * 2、其中一个有值，返回有值的那一个
 * 3、都有值，构造新list，然后判断两个链表哪个值小，哪个往后挪一位，然后递归调用赋值
 */
var mergeTwoLists = function (l1, l2) {
  function depth(l1, l2) {
    if (!l1 && !l2) {
      return null;
    }
    if (!l1 || !l2) {
      return l1 || l2;
    }
    const list = new ListNode();
    if (l1.val >= l2.val) {
      list.val = l2.val;
      l2 = l2.next;
    } else {
      list.val = l1.val;
      l1 = l1.next;
    }
    list.next = depth(l1, l2);
    return list;
  }
  return depth(l1, l2);
};
