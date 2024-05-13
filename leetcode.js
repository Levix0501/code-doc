// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} key
//  * @return {TreeNode}
//  */
// var deleteNode = function (root, key) {
//   if (!root) return root;

//   if (key < root.val) {
//     root.left = deleteNode(root.left, key);
//     return root;
//   }

//   if (key > root.val) {
//     root.right = deleteNode(root.right, key);
//     return root;
//   }

//   if (!root.left && !root.right) return null;

//   if (!root.left) return root.right;

//   if (!root.right) return root.left;

//   let successor = root.right;
//   while (successor.left) {
//     successor = successor.left;
//   }
//   root.right = deleteNode(root.right, successor.val);
//   successor.left = root.left;
//   successor.right = root.right;
//   return successor;
// };

var deleteNode = function (root, key) {
  let cur = root;
  let curParent = null;
  while (cur && cur.val !== key) {
    curParent = cur;
    if (key < cur.val) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }
  if (!cur) return root;

  if (!cur.left && !cur.right) {
    cur = null;
  } else if (!cur.left) {
    cur = cur.right;
  } else if (!cur.right) {
    cur = cur.left;
  } else {
    let successorParent = cur;
    let successor = cur.right;
    while (successor.left) {
      successorParent = successor;
      successor = successor.left;
    }
    if (successorParent === cur) {
      successorParent.right = successor.right;
    } else {
      successorParent.left = successor.right;
    }
    successor.left = cur.left;
    successor.right = cur.right;
    cur = successor;
  }

  if (!curParent) return cur;
  if (curParent.left && curParent.left.val === key) {
    curParent.left = cur;
  } else {
    curParent.right = cur;
  }
  return root;
};
