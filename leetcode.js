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
  const map = new Map();
  const dfs = (node) => {
    if (!node) return;
    if (node.left) {
      map.set(node.left.val, node);
      dfs(node.left);
    }
    if (node.right) {
      map.set(node.right.val, node);
      dfs(node.right);
    }
  };
  dfs(root);

  const set = new Set();
  let node = p;
  while (node) {
    set.add(node);
    node = map.get(node.val);
  }
  node = q;
  while (node) {
    if (set.has(node)) {
      return node;
    }
    node = map.get(node.val);
  }
};
