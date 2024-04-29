/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const queue1 = [p];
  const queue2 = [q];

  while (queue1.length && queue2.length) {
    const n1 = queue1.shift();
    const n2 = queue2.shift();
    if (!n1 && !n2) continue;
    if (!n1 || !n2) return false;
    if (n1.val !== n2.val) return false;
    queue1.push(n1.left);
    queue1.push(n1.right);
    queue2.push(n2.left);
    queue2.push(n2.right);
  }

  return queue1.length === 0 && queue2.length === 0;
};
