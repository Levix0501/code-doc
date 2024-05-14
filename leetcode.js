// 给你一个二叉树的根结点 root ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

// 一个结点的 「子树元素和」 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  const map = new Map();
  const sum = (node) => {
    if (!node) return 0;
    const s = sum(node.left) + sum(node.right) + node.val;
    map.set(s, (map.get(s) ?? 0) + 1);
    return s;
  };
  sum(root);

  let max = 0;
  for (const item of map.values()) {
    if (item > max) {
      max = item;
    }
  }
  const ret = [];
  for (const [key, value] of map.entries()) {
    if (value === max) {
      ret.push(key);
    }
  }
  return ret;
};
