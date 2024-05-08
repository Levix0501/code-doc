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
  if (!root) return null;

  let nextStart = root;
  let last;
  const handle = (node) => {
    if (!node) return;
    if (!nextStart) {
      nextStart = node;
    }
    if (last) {
      last.next = node;
    }
    last = node;
  };

  while (nextStart) {
    let node = nextStart;
    nextStart = null;
    last = null;

    while (node) {
      handle(node.left);
      handle(node.right);
      node = node.next;
    }
  }

  return root;
};
