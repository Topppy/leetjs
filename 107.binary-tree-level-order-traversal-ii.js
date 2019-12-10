/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = []
  let temp = [root]
  while (temp.length > 0) {
    let len = temp.length
    const levelRes = []
    while(len--) {
      const cur = temp.shift()
      if (!cur) continue
      levelRes.push(cur.val)
      if (cur.left) {
        temp.push(cur.left)
      }
      if (cur.right) {
        temp.push(cur.right)
      }
    }
    if (levelRes.length) res.unshift(levelRes)
  }
  return res
};
// @lc code=end

