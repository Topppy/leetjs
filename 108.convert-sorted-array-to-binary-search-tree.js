/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 * 本题考点 二分查找
 */
var sortedArrayToBST = function(nums) {
  function buildTree (arr, left, right) {
    if (left > right) {
      return null
    }
    // 这里改floor为ceil，什么原因？
    const mid = Math.ceil((left + right)/2)
    const root = new TreeNode(arr[mid])
    root.left = buildTree(arr, left, mid-1)
    root.right = buildTree(arr, mid+1, right)
    return root
  }
  return buildTree(nums, 0, nums.length - 1 )
};
// @lc code=end

