/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 * 终止条件：空节点：false，是叶子节点 && val === 差
 * 继续递归：left 差， right 差
 * 
 */
var hasPathSum = function(root, sum) {
    if (!root) return false
    const re = sum - root.val
    if (root.left === null && root.right === null) return re === 0
    return hasPathSum(root.left, re) || hasPathSum(root.right, re)
};
// @lc code=end

