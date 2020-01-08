/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 * 重点： 当有一个子树为空，计算另一个子树的深度
 */
var minDepth = function(root) {
    if (!root) return 0
    if (!root.left) return minDepth(root.right) + 1
    if (!root.right) return minDepth(root.left) + 1
    return Math.min(minDepth(root.right), minDepth(root.left)) + 1
};
// @lc code=end

