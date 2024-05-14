// 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

// 如果树中有不止一个众数，可以按 任意顺序 返回。

// 假定 BST 满足如下定义：

// 结点左子树中所含节点的值 小于等于 当前节点的值
// 结点右子树中所含节点的值 大于等于 当前节点的值
// 左子树和右子树都是二叉搜索树

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
// var findMode = function (root) {
//   const map = new Map();
//   const dfs = (node) => {
//     if (!node) return;
//     map.set(node.val, (map.get(node.val) ?? 0) + 1);
//     dfs(node.left);
//     dfs(node.right);
//   };
//   dfs(root);
//   let max = 0;
//   for (const item of map.values()) {
//     if (item > max) {
//       max = item;
//     }
//   }
//   const ret = [];
//   for (const [key, value] of map.entries()) {
//     if (max === value) {
//       ret.push(key);
//     }
//   }
//   return ret;
// };

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var findMode = function (root) {
  let base = 0,
    count = 0,
    maxCount = 0;
  let ret = [];
  const update = (x) => {
    if (x === base) {
      count++;
    } else {
      base = x;
      count = 1;
    }
    if (count === maxCount) {
      ret.push(base);
    }

    if (count > maxCount) {
      maxCount = count;
      ret = [base];
    }
  };

  let cur = root;
  let pre = null;
  while (cur) {
    if (!cur.left) {
      update(cur.val);
      pre = cur;
      cur = cur.right;
      continue;
    }

    pre = cur.left;
    while (pre.right && pre.right !== cur) {
      pre = pre.right;
    }
    if (pre.right) {
      pre.right = null;
      update(cur.val);
      cur = cur.right;
    } else {
      pre.right = cur;
      cur = cur.left;
    }
  }

  return ret;
};

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);

n1.left = n2;
n1.right = n3;
n2.right = n4;
n3.left = n5;
n3.right = n6;

findMode(n1);
