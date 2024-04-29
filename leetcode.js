// Definition for a Node.
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7))
);

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  let node = root;
  let next = node.left;
  while (node && next) {
    node.left.next = node.right;
    if (node.next) {
      node.right.next = node.next.left;
      node = node.next;
    } else {
      node = next;
      next = node.left;
    }
  }

  return root;
};

connect(root);
