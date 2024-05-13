/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  return se(root, '');
};

const se = (node, ret) => {
  if (!node) {
    ret += 'None,';
  } else {
    ret += node.val + ',';
    ret = se(node.left, ret);
    ret = se(node.right, ret);
  }

  return ret;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  return de(data.split(','));
};

const de = (dataList) => {
  if (dataList[0] === 'None') {
    dataList.shift();
    return null;
  }
  const root = new TreeNode(parseInt(dataList[0]));
  dataList.shift();
  root.left = de(dataList);
  root.right = de(dataList);
  return root;
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
