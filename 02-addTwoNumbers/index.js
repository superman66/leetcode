/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var result,
    add = 0, // 是否进位,1进位，0不进位
    currentNode = null,
    head = null

  while (l1 || l2) {
    var l1Val = l1 ? l1.val : 0
    var l2Val = l2 ? l2.val : 0
    var sum = l1Val + l2Val + add

    // 判断相加后的值是否大于10，是的话，则需要进位
    add = sum >= 10 ? 1 : 0
    var nodeValue = sum % 10
    var node = new ListNode(nodeValue)
    if (!currentNode) {
      currentNode = head = node
    } else {
      head.next = node
      head = node
    }

    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  // 当循环结束后，如果需要进位，则需要再添加最后一个节点
  if (add) {
    var node = new ListNode(add)
    head.next = node
    heade = node
  }

  return currentNode
}
