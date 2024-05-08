function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const root = new TreeNode(1, undefined, new TreeNode(2, new TreeNode(3)));

var preorderTraversal = function (root) {
  if (!root) return [];
  const ret = [];
  const stack = [root];
  while (stack.length > 0) {
    let node = stack[stack.length - 1];
    while (node) {
      ret.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      node = node.left;
    }

    while (stack.length > 0) {
      node = stack.pop();
      if (node.right) {
        stack.push(node.right);
        break;
      }
    }
  }
  return ret;
};

preorderTraversal(root);
