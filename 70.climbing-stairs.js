/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// cs(n) = cs(n-1) + cs(n-2)
// cs(1) = cs(2) = 1
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const re = [0, 1, 2]
    function climb (x) {
      if (re[x] === undefined) {
        re[x] = climb(x-1) + climb(x-2)
      }
      return re[x]
    }
    return climb(n)
};
