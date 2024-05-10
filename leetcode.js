/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const parentMap = new Map();

  const dfs = (node) => {
    if (!node) return false;
    if (node.left) {
      parentMap.set(node.left.val, node);
    }
    if (node.right) {
      parentMap.set(node.right.val, node);
    }
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);

  const set = new Set();
  let node = p;
  while (node) {
    set.add(node);
    node = parentMap.get(node.val);
  }
  node = q;
  while (node) {
    if (set.has(node)) {
      return node;
    }
    node = parentMap.get(node.val);
  }

  return ret;
};
