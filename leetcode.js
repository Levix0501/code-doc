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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let sum = 0;
  const queue = [root];
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node.left && !node.left.left && !node.left.right) {
        sum += node.left.val;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return sum;
};

// var sumOfLeftLeaves = function (root) {
//   let sum = 0;
//   const dfs = (node) => {
//     if (!node) return;
//     const left = node.left;
//     if (left && !left.left && !left.right) {
//       sum += left.val;
//     }
//     dfs(node.left);
//     dfs(node.right);
//   };
//   dfs(root);
//   return sum;
// };
