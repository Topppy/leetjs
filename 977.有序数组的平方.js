/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   let i = 0
   let j = nums.length -1
   const res = []
   while (i<=j) {
    const a = Math.abs(nums[i])
    const b = Math.abs(nums[j])
    if (a >= b) {
      res.unshift(a * a)
      i++
    } else {
      res.unshift(b * b)
      j--
    }
   }
   return res
};
// @lc code=end

