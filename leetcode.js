/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  let node = root;
  let next = node.left;
  while (node && next) {
    node.left.next = node.right;
    if (node.next) {
      node.right.next = node.next.left;
      node = node.next;
    } else {
      node = next;
      next = node.left;
    }
  }
  return root;
};
