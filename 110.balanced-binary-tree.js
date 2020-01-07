/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 平衡二叉树定义： 它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树
 */
var isBalanced = function(root) {
    if (!root) return true
    function deep(tree) {
      if (!tree) return 0
      return Math.max(deep(tree.left), deep(tree.right)) + 1
    }
    return Math.abs(deep(root.left) - deep(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};
// @lc code=end

